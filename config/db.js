const mysql = require('mysql2');

const connection = mysql.createConnection({
    host : 'localhost',
    database : 't2208m',
    user : 'root',
    password : ''
});

connection.connect(function(error){
    if(error)
    {
        throw error;
    }
    else
    {
        console.log('MySQL Database is connected Successfully');
    }
});

module.exports = connection;
