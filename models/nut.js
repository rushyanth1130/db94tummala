const mongoose = require("mongoose")
const nutSchema = mongoose.Schema({
nutName:
    {
        type: String,
        required: [true, "Nut name is required"]
    },
Price:
    {
        type: Number,
        required: [true, "Price is required"]
    },
Quantity:
    {
        type: Number,
        min: [0, "Quantity must be greater than 0"],
        max: [15, "Quantity must be less than 15"],
    }
})
module.exports = mongoose.model("Nut",nutSchema)