const mongoose = require('mongoose');
require('dotenv').config();
const DB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
    }catch(error){
        console.log("DB sey connect nahi hua");
        console.log(error);
    }
};
module.exports = DB;