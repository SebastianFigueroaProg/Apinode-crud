import Sequelize from 'sequelize';

const db = new Sequelize('crud_react', 'root','bianca893',{
    host:'localhost',
    dialect: 'mysql'
});

export default db;