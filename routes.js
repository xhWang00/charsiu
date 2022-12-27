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
            BRBA: req.body.BRBA,
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

router.patch("/units/:id", async (req, res) => {
    try {
        const unit = await Unit.findOne({ _id: req.params.id });

        unit.unitNum = req.body.unitNum ? req.body.unitNum : unit.unitNum;
        unit.tenant = req.body.tenant ? req.body.tenant : unit.tenant;
        unit.BRBA = req.body.BRBA ? req.body.BRBA : unit.BRBA;
        unit.rent = req.body.rent ? req.body.rent : unit.rent;
        unit.deposit = req.body.deposit ? req.body.deposit : unit.deposit;
        unit.remoteControllDeposit = req.body.remoteControllDeposit ? req.body.remoteControllDeposit : unit.remoteControllDeposit;
        unit.moveinDate = req.body.moveinDate ? req.body.moveinDate : unit.moveinDate;

        await unit.save();
        res.send(unit);
    } catch {
        res.status(404);
        res.send({error: "Unit doesn't exist!."});
    }
});

module.exports = router;