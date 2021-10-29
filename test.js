const { Sequelize } = require('sequelize');
const sequelize =  new Sequelize('postgresql://harshit:P0gka5RsKVNgv3Xc@free-tier8.aws-ap-southeast-1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&sslrootcert=$env:appdata\.postgresql\root.crt&options=--cluster%3Dzigzag-bat-461');


try {
    test();
    console.log('Connection has been established successfully.');
    console.log(sequelize.UUID4);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

