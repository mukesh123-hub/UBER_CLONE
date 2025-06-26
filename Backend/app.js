const dotenv=require('dotenv');
dotenv.config();
const express=require('express');
const cors=require('cors');
const app=express();
const cookieParser=require('cookie-parser');

const userRoutes=require('./routes/user.routes');
const captainRoutes=require('./routes/captain.routes');
const mapsRoutes=require('./routes/maps.routes');
const rideRoutes=require('./routes/ride.routes')




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
app.use('/captains', captainRoutes);
app.use('/maps',mapsRoutes);
app.use('/rides',rideRoutes);

module.exports=app;