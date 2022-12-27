const express = require("express");
const Unit = require("./models/Unit");
const Payment = require("./models/Payment");
const router = express.Router();

router.get("/units", async (req, res) => {
    const units = await Unit.find()
    res.send(units);
});

router.post("/units", async (req, res) => {
    try {
        const unit = new Unit({
            unitNum: req.body.unitNum,
            tenant: req.body.tenant,
            rent: req.body.rent,
            deposit: req.body.deposit,
            remoteControllDeposit: req.body.remoteControllDeposit,
            moveinDate: req.body.moveinDate
        });
        await unit.save();
        res.send(unit);
    } catch {
        res.status(400);
        res.send({error: "The unite number already exists!"});
    }
});

router.get("/units/:id", async (req, res) => {
    try {
        const unit = await Unit.findOne({ _id: req.params.id });
        res.send(unit);
    } catch {
        res.status(404);
        res.send({error: "Unit doesn't exist!"});
    }
});

module.exports = router;