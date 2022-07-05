const mongoose = require("mongoose");
const {Schema} = mongoose;


//Schema
const todoSchema = new Schema({
    title: String,
    description: String,
    created: {type:Date, default: Date.now}
},
{
    timestamps: false
}

)

module.exports = mongoose.model("Todo",todoSchema);