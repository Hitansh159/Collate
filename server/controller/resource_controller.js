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
        if (data) {

            if (data.userEmail) {
                // get user id from here
                var result = await user.get_by_email(data.userEmail);

                if (result) {
                    data.userId = result.id;
                    delete data['userEmail'];
                    delete data['id'];

                    let res = await model.resource.create(data);

                    if (res) {
                        return res.json;
                    }
                    else {
                        return null;
                    }
                }
                else {
                    return null;
                }
            }
            else if (data.userId) {
                let res = await model.resource.create(data);

                if (res) {
                    return res.json;
                }
                else {
                    return null;
                }
            }
            else {
                return null;
            }

        }
        else {
            return null;
        }


    } catch (e) {
        console.log(e);
        return false;
    }
}

async function get_by_id(id) {
    try {
        if (id) {
            var result = await model.resource.findByPk(id);
            if (result) {
                return result.json;
            } else {
                return null;
            }
        }
        else {
            return null;
        }
    } catch (e) {
        console.log(e);
        return false;
    }
}
async function is_belong(email, resource_id) {
    try {
        var user_res = await user.get_by_email(email);
        var userId = user_res.id;
        var resource = await get_by_id(resource_id);
        if (resource.userId == userId) {
            return true;
        }
        return false;
    } catch (e) {
        console.log(e);
        return false;
    }
}
async function update(data) {
    try {
        var resource_id = data.id;
        var email = data.userEmail;
        if (resource_id && email) {
            let x = await is_belong(email, resource_id);
            if (x) {

                var result = await model.resource.update({ tags: data.tags, public: data.public, content: data.content }, {
                    where: {
                        id: resource_id
                    }
                });
                if (result) {
                    console.log(result);
                    return true;
                }
                else return false;
            }
            else {
                return null;
            }

        } else {
            return null;
        }

    }
    catch (e) {
        console.log(e);
        return false;
    }

}
async function delete_by_id(id) {
    try {
        if (id) {
            var result = await model.resource.destroy({ where: { id: id } });
            return result;
        } else {
            return null;
        }
    } catch (e) {
        console.log(e);
        return false;
    }
}
async function find_all_public_order(order_array) {
    try {
        var sorted_resources = await model.resource.findAll({ where: { public: 1 }, order: order_array });
        if (sorted_resources.length > 0) {
            return sorted_resources;
        } else {
            return null;
        }
    } catch (e) {
        console.log(e);
        return false;
    }

}

async function find_all_by_email(email) {
    try {

        var us = await user.get_by_email(email)

        if (us) {
            var result = await model.resource.findAll({ where: { userId: us.id }, order: [['updatedAt', 'DESC']] });

            if (result.length > 0) {
                return result;
            }
            else {
                return null;
            }
        }
        else {

            return null;
        }
    }
    catch (e) {
        console.log(e)
        return false;
    }
}
// async function find_tags_public(tags)
// {
//     try{

//         if(tags.length > 0)
//         {
//             var rs = await find_all_public_order([['updatedAt','DESC']]);

//             var result = []

//             for (let i in resources)
//             {
//                 let tg = rs[i];

//             }
//         }
//         else
//         {
//             return 0;
//         }

//     }
//     catch(e)
//     {
//         console.log(e)
//         return false;
//     }
// }
module.exports = {
    get_by_id,
    create,
    update,
    is_belong,
    delete_by_id,
    find_all_public_order,
    find_all_by_email
}
async function test() {
    var data = {
        "tags": [
            "test5",
            "test6",
            "test7"
        ],
        "public": 1,
        "content": {
            "description": "ddsdsdsdsddsdsdesc",
            "title": "title"
        },
        "userEmail": "shreyasjadhav901@gmail.com"
    }
    var x = await find_all_by_email('john@gmail.com');
    console.log(x);


}
// test()