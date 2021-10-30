// to connect to the cockroachdb
const Sequelize = require("sequelize-cockroachdb");
// For secure connection:
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();

// console.log(process.env.D_USER)
// console.log(process.env.D_PASSWORD)
// console.log(process.env.D_PORT)
// console.log(process.env.D_DATABASE)
// console.log(process.env.D_HOST)

// Connect to CockroachDB through Sequelize.
var sequelize = new Sequelize({
  dialect: "postgres",
  username: process.env.D_USER,
  password: process.env.D_PASSWORD,
  host: process.env.D_HOST,
  port: process.env.D_PORT,
  database: process.env.D_DATABASE,
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
      // For secure connection:
      ca: fs.readFileSync('certs/ca.crt')
                .toString()
    },
  },
  logging: false,
});

// async function test_connection()
// {
//     await sequelize.authenticate()
// }

// try {

//     test_connection();
    
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }


module.exports = sequelize;

  

