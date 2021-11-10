const mongoose = require("mongoose")
const nutSchema = mongoose.Schema({
nutName: String,
Price: Number,
Quantity: Number
})
module.exports = mongoose.model("Nut",nutSchema)