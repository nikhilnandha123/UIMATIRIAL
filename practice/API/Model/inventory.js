var mongoose = require('mongoose');

var studSchema = mongoose.Schema({
    item:String,
    quantity:String,
    name:String,
    fee:Number
})

module.exports = mongoose.model("inventories",studSchema);