const express = require("express");
const mongoose = require("mongoose");
const CONFIG = require("./config");
const routes = require("./routes");

// Prevent "(node:5969) [MONGOOSE] DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7."
mongoose.set("strictQuery", false);
// Connect to MongoDB
mongoose
    .connect(CONFIG.DBURL, {useNewUrlParser: true})
    .then(() => {
        const app = express();

        app.use(express.json());
        app.use("/api", routes);

        app.listen(8000, () => {
            console.log("Server is running at port 8000.");
        });
    });

