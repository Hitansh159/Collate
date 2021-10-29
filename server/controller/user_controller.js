var model = require('../models/models.js')


async function create(email, name = '')
{
    /** creates email */
    // email : string 
    // name : name , default = ""
    try
    {
        const my_user = await model.user.create({email:email,name:name});
        // console.log(my_user);
        return my_user.json;
    }
    catch (e)
    {
         console.log(e);
         return false;
    }
}

async function findOrCreate(email,name = '')
{
    try{

        var [result,created] = await model.user.findOrCreate({where : { email : email},defaults: { name: name}})
        
        if(result)
        {
            return result.json;
        }
        else
        {
            return null;
        }


    }
    catch (e)
    {
        console.log(e);
        return false;
    }
}
async function get_by_id(id)
{
    try
    {
        var result = await model.user.findByPk(id);
        //console.log(result);

        if(result)
        {
            return result.json;
        }
        else{

            return null;
        }
    }
    catch(e)
    {
        console.log(e);
        return false;
    }

}

async function get_by_email(email,name = '')
{
    try
    {
        var result = await model.user.findOne({ where: { email:email}})

        if( result)
        {
            return result.json
        }
        else{

            return null;
        }
    }
    catch (e){

        console.log(e)
        return false;
    }
}

async function update_by_email(email, name)
{
    /// updates name

      try
      {
        var result = await model.user.update({ name: name }, {
            where: {
              email : email
            }
          })

        return result;
      }
      catch (e){

          console.log(e);
          return false;
      }
}

async function delete_by_dict(dict)
{
    try
    {
        var result = await model.user.destroy({where : dict})
        return result;
    }
    catch (e){

        console.log(e)
        return false;
    }

}


// async function test()
// {
//     var x = await findOrCreate('test1@gmail.com')

//     console.log(x)
// }

// test()

module.exports = {
    create,
    findOrCreate,
    get_by_id,
    get_by_email,
    update_by_email,
    delete_by_dict
}