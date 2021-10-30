const Sequelize = require('sequelize-cockroachdb');
const DataTypes = Sequelize.DataTypes;
const sequelize = require('../sequelize.js')

var user = sequelize.define('user', {
    id : {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV1, 
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull : false,
      unique:true
    }, 
    name:{
        type : DataTypes.STRING,
        allowNull: false,
    },
    json:{

        type: DataTypes.VIRTUAL,
        get() 
        {
          let result = {id : this.id, email : this.email, name : this.name};
          return result;
        },
        set(value) 
        {
          throw new Error('Do not try to set the `JSON` value!');
        }
      }
  });


  var resource = sequelize.define('resource',{

    id : {

      type : DataTypes.UUID,
      defaultValue: Sequelize.UUIDV1, 
      primaryKey: true
    },

    tags :{
       type : DataTypes.ARRAY(DataTypes.STRING),
       allowNull : false
    },

    content : {
      type : DataTypes.JSON,
      allowNull : false
    },

    public : {
       type : DataTypes.INTEGER,
       defaultValue : 0
    },

  json:{
      type: DataTypes.VIRTUAL,
      get() 
      {
        let result = {id: this.id, tags : this.tags, public : this.public, content : this.content, userId : this.userId};
        return result;
      },
      set(value) 
      {
        throw new Error('Do not try to set the `JSON` value!');
      }
    },

  ispublic:{

      type: DataTypes.VIRTUAL,
      get() 
      {
        return this.public;
      },
      set(value) 
      {
        throw new Error('Do not try to set the `JSON` value!');
      }
    },

  getContent : {
      type: DataTypes.VIRTUAL,
      get() 
      {
        return this.content;
      },
      set(value) 
      {
        throw new Error('Do not try to set the `JSON` value!');
      }
    } 
});

user.hasMany(resource);

var label = sequelize.define('label', {

   id : {
    
    type : DataTypes.UUID,
    defaultValue: Sequelize.UUIDV1, 
    primaryKey: true
   },

   name : {

     type : DataTypes.STRING,
     allowNull : false,
   }
});

resource.hasMany(label);

(async () => {
  await sequelize.sync();
    // Code here
    console.log('synced database')
})();

// async function c()
// {
//    var data = { tags : ['Hello','How','you'], content : {'title': 'whatsup',description : 'Got you'}};
//    var x = await resource.create(data);

//    console.log(x.json)
//    console.log(x.getContent.title)
// }

// c()

exports.user = user;
exports.resource = resource;
exports.label = label;

