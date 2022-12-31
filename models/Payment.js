const mongoose = require("mongoose");

const schema = mongoose.Schema({
    amount: Number,
    comment: String,
    year: Number,
    month: Number,
    unitId: mongoose.Schema.Types.ObjectId,
    isDeposit: Boolean
});

module.exports = mongoose.model('Payment', schema);