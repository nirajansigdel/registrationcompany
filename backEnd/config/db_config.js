import mysql2 from "mysql2";
import dotenv from 'dotenv'
dotenv.config();


//databse connection
const connection = mysql2.createConnection({
    host : process.env.Localhost,
    user : process.env.user,
    password : process.env.password,
    database : process.env.database
});

//check the connection
connection.connect((err) => {


    
    if(!err){
        console.log(`Database Connected sucessfully on ${new Date()} `);
    }
    else{
        console.log(err);
    }
    });

export default connection;