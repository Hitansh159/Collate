const { truncate } = require('fs');
var model = require('../models/models.js');
const sequelize = require('../sequelize.js');
var user = require('./user_controller.js');
var labels = require('./labels_controller.js');
// async function add_labels(result){
//      var resource_id =   result.id;
//      var tags = result.tags;
//      var data = [];
//      for (let i in tags){
//          var temp =  {};
//          temp['name'] = tags[i];
//          temp['resourceId'] = resource_id;
//          data.push(temp);
//      }

//      var result = await labels.bulk_create(data);
//      if(result.length != 0){
//          console.log(result);
//          return true;
//      }
//      else{
//          return false;
//      }
// }
async function create(data) {
    // data : {
    // tags: [], /// array of tags
    // public  : 0 or 1 ,/// if 1 then mention , if 0 not necessary to mention (can leave blank)
    // content: { title: title, description : description, other field: values },
    // userId: userId(optional),
    //     userEmail : userEmail(optional)}
    // give atleast one userId or userEmail
    try {
        if (data) 
        {

            if (data.userEmail) {
                // get user id from here
                var result = await user.get_by_email(data.userEmail);

                if(result)
                {
                    data.userId = result.id;
                    delete data['userEmail'];
                    delete data['id'];

                    let res = await model.resource.create(data);
  
                    if(res)
                    {  
                            return res.json;
                    }
                    else
                    {
                        return null;
                    }
                }
                else
                {
                    return null;
                }
            }
            else if(data.userId)
            {
                let res = await model.resource.create(data);

                if(res)
                {
                    return res.json;
                }
                else
                {
                    return null;
                }
            }
            else
            {
                return null;
            }

        }
        else
        {
             return null;
        }


    } catch (e) {
        console.log(e);
        return false;
    }
}

async function get_by_id(id){
    try{
         if(id){
             var result  =await model.resource.findByPk(id);
             if(result){
                 return result.json;
             }else{
                 return null;
             }
         }
         else{
             return null;
         }
    }catch(e){
        console.log(e);
        return false;
    }
}
async function is_belong(email,resource_id){
    try{
         var user_res = await user.get_by_email(email);
         var userId =user_res.id;
         var resource = await get_by_id(resource_id);
         if(resource.userId == userId){
             return true;
         }
         return false;
    }catch(e){
      console.log(e);
      return false;
    }
}
async function update(data){
    try{
        var resource_id = data.id;
        var email = data.userEmail;
        if(resource_id && email){
            let x = await is_belong(email,resource_id);
            if(x){

                var result =  await model.resource.update({tags : data.tags,public: data.public,content:data.content}, {
                    where: {
                        id : resource_id
                    }
                  });
                  if(result){
                      console.log(result);
                      return true;
                  }
                  else return false;
            }
            else{
                return null;
            }

        }else{
            return null;
        }

    }
    catch (e) {
        console.log(e);
        return false;
    }
    
}
async function delete_by_id(id){
    try{
       if(id){
       var result =  await model.resource.destroy({ where :{id:id }});
       return result;
       }else{
           return null;
       }
    } catch (e) {
        console.log(e);
        return false;
    }
}

module.exports = {
    get_by_id,
    create,
    update,
    is_belong,
    delete_by_id
}
async function test()
{
    var data  = {
        "id": "5a416c30-38f6-11ec-bd63-d338df0aa0e2",
       "tags": [
           "a",
           "b",
           "c"
       ],
       "public": 0,
       "content": {
           "description": "ddsdsdsdsddsdsdesc",
           "title": "title"
       },
       "userEmail":"test@gmail.com"
   }
    // var x = await add_labels(data);


}
//  test()