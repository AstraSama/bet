import "dotenv/config";
import e from "express";
import user_router from "../src/http/Routers/user_router.js";

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);

});

module.exports = express;