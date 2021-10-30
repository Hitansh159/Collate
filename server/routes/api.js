var express = require('express');
const { idle_in_transaction_session_timeout } = require('pg/lib/defaults');
var router = express.Router();
var user = require('../controller/user_controller.js')
var resource = require('../controller/resource_controller.js');
const { response } = require('express');
function containes(a,b){
   for(let i in b){
      if(a.includes(b[i]))return true;
   }
   return false;
}
router.post('/user', async function (req, res, next) {

   try {
      var email = req.body.email;

      if (email) {
         var result = await user.get_by_email(email);

         if (result) {
            res.json(result);
         }
         else {
            res.json({ error: 'Does not exist' });
         }
      }
      else {
         res.json({ error: 'Please give email' })
      }
   }
   catch (e) {
      console.log(e);
      res.status(404).send('Some error occured');
   }

});

router.post('/login', async function (req, res, next) {


   try {

      var email = req.body.payload.identifier;

      if (email) {
         var result = await user.findOrCreate(email)

         if (result) {
            res.json(result);
         }
         else {
            res.json({ error: 'Could not add to database' })
         }
      }
      else {
         res.json({ error: "Please give email" })
      }


   }
   catch (e) {
      console.log(e)
      res.status(404).send('some error occured');
   }



});
router.get('/resource/:id', async function (req, res, next) {
   try {

      if (req.body) {
         var email = req.body.email;
         var resource_id = req.params.id;
         var result = await resource.get_by_id(resource_id);
         if (result) {
            if (result.public == 0) {
               // private
               var user_result = await user.get_by_email(email);
               if (user_result) {
                  if (user_result.id == result.userId) {
                     res.json(result)
                  }
                  else {
                     res.json({ error: 'canot access' })
                  }
               }

               else {
                  res.json({ error: 'wrong email ' })
               }
            }
            else {
               //public
               res.json(result);
            }
         }
         else {
            res.json({ error: 'Could not found ' })
         }
      }
      else {
         var resource_id = req.params.id;
         var result = await resource.get_by_id(resource_id);
         if (result.public == 0) {
            res.json({ error: 'cannot access' })
         }
         else {
            res.json(result);
         }
      }

   } catch (e) {
      console.log(e)
      res.status(404).send('some error occured');
   }
});
router.post('/save', async function (req, res, next) {
   try {
      var data = req.body;
      if (data.id) {
         //update resource
         var x = await resource.update(data);
         if (x) {
            var resource_result = await resource.get_by_id(data.id);
            if (resource_result) {
               res.json(resource_result);

            } else {
              
               res.json({ 'error': "could not update resource" });
            }
         } else {
           
            res.json({ 'error': "could not update resource" });
         }
      } else {
         //create resource
         var created_resource = await resource.create(data);
         if (created_resource) {
            res.json(created_resource);
         } else {
            res.json({ 'error': "could not create resource" });
         }
      }
   } catch (e) {
      console.log(e)
      res.status(404).send('some error occured');
   }

})
router.get('/delete/:id',async function(req,res,next){
   try{
    var email = req.body.email;
    var id = req.params.id;
   var x = await resource.is_belong(email,id);
   if(x){
      var delete_result = await resource.delete_by_id(id);
      if(delete_result){
         res.json({'sucess':true});
      }else{
         res.json({'error':'not deleted'});
      }
   }
   else{
      res.json({'error':'not allow'});
   }

   }catch (e) {
      console.log(e)
      res.status(404).send('some error occured');
   }

})
router.get('/feed',async function(req, res,next){
   try{
   var query = req.body.query;
   var page_no = req.body.page_no
   var limit = req.body.limit 
   var tags = req.body.tags
   if(!query){
      if(tags.length == 0){
         
      }
   }
   }catch(e){
      console.log(e)
      res.status(404).send('some error occured');
   }
})
module.exports = router;
