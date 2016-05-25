var prompt=require('prompt');
var fs=require('fs');
var mysql=require('mysql');
var parse=require('parse')
var Sequelize=require('sequelize')

//prompt user 

// //create connection to server
// function sports(price,quantity,callback){
// 		var con=mysql.createConnection({
// 			host:'localhost',
// 			user:'root',
// 			database:'Bamazon'
// 		});

		
//connection option
var source={
	localhost:{
		port:3306,
		host:'localhost',
		user:'root',
		database:'Bamazon'
	}
}

// Selects a connection (can be changed quickly as needed)
//var selectedSource = source.jawsDB;

// Creates mySQL connection using Sequelizeformation and connecting to the mysql database
//taking sequelize in
//NOT WORKINGGG
var sequelize = new Sequelize('Bamazon','root', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

});
module.exports=sequelize;
		