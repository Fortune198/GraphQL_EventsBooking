const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    event: {
        type: Schema.Types.ObjectId,
        ref: 'Event'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
},
    { timestamps: true }  //gives us the update at and created at feature
);


module.exports = mongoose.model('Booking', bookingSchema);