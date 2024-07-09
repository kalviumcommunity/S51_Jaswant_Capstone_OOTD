const mongoose = require('mongoose');

const SaveSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
   
}, {
    timestamps: true
});

module.exports = mongoose.model('Save', SaveSchema);
