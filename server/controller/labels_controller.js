var model = require('../models/models.js')

async function bulk_create(data_arr)
{
    /// data_arr = [{name:name, resourceId : resourceId}]
    try {

        var x = await model.label.bulkCreate(data_arr)

        if(x)
        {
            return x;
        }
        else
        {
            return null;
        }
        
    } catch (e) {

        console.log(e)
        return false;
    }
}

async function find_by_tags(tags)
{
    // tag : [string] -> tags array name;

    try {

        var x  = await model.label.findAll({

            where : {

                name : tags 
            },
            attributes : ['resourceId']
        })

        return x;
        
    } catch (e) {

        console.log(e)
        return false;
        
    }
}

async function test()
{
    var data = [{name:'code',resourceId : 'd5b7b5f0-38dc-11ec-adae-33cc24f089c9'},{name:'paper',resourceId : '7fe35d40-38f6-11ec-b11a-5189666b32e6'}]
    var tags = ['code','paper']
    var res = await find_by_tags(tags)

    console.log(res);
}

test()