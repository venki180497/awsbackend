const Sequelize = require('sequelize');
const user = require('./user');
const sequelize = new Sequelize('test','admin','Thanam123',
    {    host: 'database-1.c3aqsswku7tz.ap-south-1.rds.amazonaws.com',    dialect: 'mysql'});
sequelize.authenticate().then(() => { 
      console.log('Connection has been established successfully.');})
      .catch(err => {    console.error('Unable to connect to the database:', err);});

    const db={};
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    db.user = user(sequelize,Sequelize.DataTypes);
    sequelize.sync({force:false}).then(()=>{
        console.log('Database and tables created');
    });
module.exports = db;