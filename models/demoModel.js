const mongoose  = require("mongoose");

const demoSchema = new mongoose.Schema({
        name:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        createdAt:{
            type:Date
        }
});


module.exports = mongoose.model("weekdemo",demoSchema);