var model = require('../models/models.js')
var user = require('./user_controller.js');

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


async function test()
{
    var data  = { tags : ['a','b','c'],  content : {title : 'title',description : 'desc'}, public : 0,userEmail : 'john@gmail.com'}
    var x = await create(data);

    console.log(x)
}
test()