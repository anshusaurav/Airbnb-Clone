var mongoose = require('mongoose');
var deepPopulate = require('mongoose-deep-populate')(mongoose);

var reservationSchema = new mongoose.Schema({
    message: { type: String, required: true },
    status: { type: String, default: 'pending' },
    date: { type: Date, default: Date.now },
    property: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'property'
    },
    guest: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
}, {
    timestamps: true
});

reservationSchema.plugin(deepPopulate, {});

var reservation = mongoose.model('Reservation', reservationSchema);

module.exports = reservation;
