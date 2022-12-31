const express = require("express");
const Unit = require("./models/Unit");
const Payment = require("./models/Payment");
const router = express.Router();



router.get("/payments", async (req, res) => {
    const payments = await Payment.find()
    res.send(payments);
});

router.post("/payments", async (req, res) => {
    try {
        const payment = new Payment({
            amount: req.body.amount,
            comment: req.body.comment,
            year: req.body.date.getFullYear(),
            month: (req.body.date.getMonth() + 1),
            unitId: req.body.unitId,
            isDeposit: req.body.isDeposit
        });
        await payment.save();
        res.send(payment);
    } catch {
        res.status(400);
        res.send({error: "The payment number already exists!"});
    }
});

router.get("/payments/:id", async (req, res) => {
    try {
        const payment = await Payment.findOne({ _id: req.params.id });
        res.send(payment);
    } catch {
        res.status(404);
        res.send({error: "Payment doesn't exist!"});
    }
});

router.patch("/payments/:id", async (req, res) => {
    try {
        const payment = await Payment.findOne({ _id: req.params.id });

        payment.amount = req.body.amount ? req.body.amount : payment.amount;
        payment.comment = req.body.comment ? req.body.comment : payment.comment;
        payment.year = req.body.date ? req.body.date.getFullYear() : payment.year;
        payment.month = req.body.date ? (req.body.date.getMonth() + 1) : payment.month;
        payment.unitId = req.body.unitId ? req.body.unitId : payment.unitId;
        payment.isDeposit = req.body.isDeposit ? req.body.isDeposit : payment.isDeposit;

        await payment.save();
        res.send(payment);
    } catch {
        res.status(404);
        res.send({error: "Payment doesn't exist!."});
    }
});

router.delete("/payments/:id", async (req, res) => {
    try {
        await Payment.deleteOne({ _id: req.params.id });
        res.status(204).send();
    } catch {
        res.status(404);
        res.send({error: "Payment doesn't exist!."});
    }
});

router.get('/payments/byDate/:unitId/:year/:month', async (req, res) => {
    try {
        const payment = await Payment.find({
            unitId: req.params.unitId,
            year: req.params.year,
            month: req.params.month
        });
        res.send(payment);
    } catch {
        res.status(404);
        res.send({error: "Payment doesn't exist!"});
    }
});



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
            remoteControlDeposit: req.body.remoteControlDeposit,
            moveinDate: req.body.moveinDate
        });
        await unit.save();
        res.send(unit);
    } catch {
        res.status(400);
        res.send({error: "This unit number already exists!"});
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
        unit.remoteControlDeposit = req.body.remoteControlDeposit ? req.body.remoteControlDeposit : unit.remoteControlDeposit;
        unit.moveinDate = req.body.moveinDate ? req.body.moveinDate : unit.moveinDate;

        await unit.save();
        res.send(unit);
    } catch {
        res.status(404);
        res.send({error: "Unit doesn't exist!."});
    }
});

router.delete("/units/:id", async (req, res) => {
    try {
        await Unit.deleteOne({ _id: req.params.id });
        res.status(204).send();
    } catch {
        res.status(404);
        res.send({error: "Unit doesn't exist!."});
    }
});



module.exports = router;