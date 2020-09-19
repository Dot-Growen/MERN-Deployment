const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            "Pet's name is required"
        ],
        minlength: [3, "minimum length 3 character"]
    },
    type: {
        type: String,
        required: [
            true,
            "Pet's type is required"
        ],
        minlength: [3, "minimum length 3 character"]
    },
    description: {
        type: String,
        required: [
            true,
            "Pet's description is required"
        ],
        minlength: [3, "minimum length 3 character"]
    },
    skillOne: { type: String },
    skillTwo: { type: String },
    skillThree: { type: String },
    likes: { type: Number }
}, { timestamps: true });




module.exports.Pet = mongoose.model('Pet', PetSchema);