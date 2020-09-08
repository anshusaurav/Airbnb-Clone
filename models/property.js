
const mongoose = require("mongoose");

var propertySchema = new mongoose.Schema({
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    date: { type: Date, default: Date.now },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timeStamps: true
});

var property = mongoose.model('Property', propertySchema);

module.exports = property;
