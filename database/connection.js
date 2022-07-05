const mongoose = require('mongoose');
require('dotenv').config();
const connectionString = process.env.CONNECTIONSTRING

const connectDB = async()=>{
    try{
       await mongoose.connect(connectionString,
            {
                //useUnifiedTopology: true,
                useNewUrlParser: true,
                // useFindAndModify: true
            });
            console.log("database connected...");   
    }catch(err){
        console.error(err.message);
        process.exit(1);
    }

}

module.exports = connectDB;