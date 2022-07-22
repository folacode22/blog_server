const dotenv = require('dotenv');
dotenv.config()

const express = require ('express');
const mongoose = require ('mongoose');
const blogRouter = require("./routes/blog");

const app = express();
const port = process.env.PORT || 3500;


app.use (express.json());
app.use (blogRouter);


mongoose.connect(process.env.MONGO_URL, ()=>{
    console.log('connect to db');
});




app.listen(port, ()=>{
console.log(`server is running on port ${port}`);
console.log(process.env.NODE_ENV);
});

