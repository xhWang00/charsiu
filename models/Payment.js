const mongoose = require("mongoose");

const schema = mongoose.Schema({
    amount: Number,
    comment: String,
    date: Date,
    isDeposit: Boolean
});

module.exports = mongoose.model('Payment', schema);