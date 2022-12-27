const mongoose = require("mongoose");

const schema = mongoose.Schema({
    unitNum: {type: Number, unique: true},
    tenant: String,
    rent: Number,
    deposit: Number,
    remoteControllDeposit: Number,
    moveinDate: Date
});

module.exports = mongoose.model('Unit', schema);