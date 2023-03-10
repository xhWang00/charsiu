const mongoose = require("mongoose");

const schema = mongoose.Schema({
    unitNum: {type: Number, unique: true},
    tenant: String,
    BRBA: String,
    rent: Number,
    deposit: Number,
    remoteControlDeposit: Number,
    moveinDate: Date
});

module.exports = mongoose.model('Unit', schema);