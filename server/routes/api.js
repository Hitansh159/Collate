var express = require('express');
const { idle_in_transaction_session_timeout } = require('pg/lib/defaults');
var router = express.Router();
var user = require('../controller/user_controller.js')
var resource = require('../controller/resource_controller.js');
const { response } = require('express');
function contains(a,b){
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
      var name = req.body.payload.name;


      if (email && name) {
         var result = await user.findOrCreate(email,name)

         if (result) {
            res.json(result);
         }
         else {
            res.json({ error: 'Could not add to database' })
         }
      }
      else {
         res.json({ error: "Please give email or name" })
      }


   }
   catch (e) {
      console.log(e)
      res.status(404).send('some error occured');
   }



});
router.post('/resource/:id', async function (req, res, next) {
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
router.post('/delete/:id',async function(req,res,next){
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


function make_feed_response(resource_array)
{
   let result = []
    for(let i in resource_array)
    {
        let temp  = { 

           id : resource_array[i].id,
           title : resource_array[i].content.title,
           description : resource_array[i].content.description,
           tags : resource_array[i].tags
         }

         result.push(temp);
    }

    return result;
}

function make_feed_response1(resource_array,tags)
{
   let result = []
    for(let i in resource_array)
    {

      if(contains(resource_array[i].tags,tags)){
        
         let temp  = { 

           id : resource_array[i].id,
           title : resource_array[i].content.title,
           description : resource_array[i].content.description,
           tags : resource_array[i].tags
         }

         result.push(temp);
      }
    }

    return result;
}
router.get('/feed',async function(req, res,next){
   try{
   var query = req.body.query;
   // var page_no = req.body.page_no
   // var limit = req.body.limit 
   var tags = req.body.tags
   if(!query){

      if(tags.length == 0){

         // means no tag , so give all the public things
         var x = await resource.find_all_public_order([['updatedAt','DESC']]);
         var result = make_feed_response(x)
         res.json({data : result});
      
      }
      else
      {
         var x = await resource.find_all_public_order([['updatedAt','DESC']]);
         var result = make_feed_response1(x,tags)
         res.json({data : result});
      }
   }
   else
   {
       res.json({error : 'No queries allowed'})
   }

   }catch(e){
      console.log(e)
      res.status(404).send('some error occured');
   }
})


router.post('/feed',async function(req,res,next){
    try {

      var query = req.body.query;
       var email = req.body.email;
       var tags = req.body.tags; 

       if(email == '')
       {
         
         if(!query){

            if(tags.length == 0){
      
               // means no tag , so give all the public things
               var x = await resource.find_all_public_order([['updatedAt','DESC']]);
               var result = make_feed_response(x)
               res.json({data : result});
            
            }
            else
            {
               var x = await resource.find_all_public_order([['updatedAt','DESC']]);
               var result = make_feed_response1(x,tags)
               res.json({data : result});
            }
         }
         else
         {
             res.json({error : 'No queries allowed'})
         }

       }
       else{

         if(!query)
         {
            var x = await resource.find_all_by_email(email);
            
            if(tags.length == 0){

               res.json( {data : make_feed_response(x)});
            }
            else
            {
               res.json({data : make_feed_response1(x,tags)});
            }

         }
         else
         {
            res.json({error : 'queries is not implemented'})
         }
      }
       
    } catch (e) {

      console.log(e)
      res.status(404).send('some error occured');
       
    }
});
module.exports = router;
