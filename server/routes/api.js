var express = require('express');
const { idle_in_transaction_session_timeout } = require('pg/lib/defaults');
var router = express.Router();
var user  = require('../controller/user_controller.js')

router.post('/user', async function(req, res, next) {

  try
  {
    var email = req.body.email;

    if(email)
    {
       var result = await user.get_by_email(email);

       if(result)
       {
          res.json(result);
       }
       else
       {
          res.json({error : 'Does not exist'});
       }
    }
    else
    {
       res.json({error : 'Please give email'})
    }
  }
  catch (e)
  {
     console.log(e);
     res.status(404).send('Some error occured');
  }
    
});

router.post('/login', async function(req, res, next){


    try{

        var email = req.body.payload.identifier;

        if(email)
        {
             var result = await user.findOrCreate(email)

             if(result)
             {
                res.json(result);
             }
             else
             {
                res.json({error : 'Could not add to database'})
             }
        }
        else
        {
           res.json({error : "Please give email"})
        }


    }
    catch(e)
    {
      console.log(e)
      res.status(404).send('some error occured');
    }



});

module.exports = router;
