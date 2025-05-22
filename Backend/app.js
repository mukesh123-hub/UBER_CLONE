const dotenv=require('dotenv');
dotenv.config();
const express=require('express');
const cors=require('cors');
const app=express();
const cookieParser=require('cookie-parser');
const userRoutes=require('./routes/user.routes');




app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const connectToDb=require('./db/db');
app.use(cookieParser());
connectToDb();


app.get('/',(req,res)=>{
    res.send("hello world");
});
app.use('/users', userRoutes);

module.exports=app;