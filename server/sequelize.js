// to connect to the cockroachdb
const Sequelize = require("sequelize-cockroachdb");
// For secure connection:
const fs = require('fs');

// Connect to CockroachDB through Sequelize.
var sequelize = new Sequelize({
  dialect: "postgres",
  username: "tejas",
  password: "tejas1234567890",
  host: "free-tier8.aws-ap-southeast-1.cockroachlabs.cloud",
  port: 26257,
  database: "zigzag-bat-461.help",
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

  

