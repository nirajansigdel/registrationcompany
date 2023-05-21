import express from "express";
const app = express();
import cors from "cors";
import dotenv from 'dotenv'
dotenv.config();


app.options("*",cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


//wecome message
app.get("/",(req,res)=>
{
    res.json({message:"Welcome to node js appliction"});
});
let PORT = process.env.PORT || 8008
app.listen(PORT,()=> {
    console.log(`Server is running on http://localhost:${PORT}`);
})