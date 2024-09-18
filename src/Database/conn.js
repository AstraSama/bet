import mongoose from "mongoose";
import MONGO_DB from "../../.env"

const mongoose = require("mongoose");

const mongo_db = MONGO_DB.env;

async function main() {
    await mongoose.connect(mongo_db);

}

main()
    .then(() => console.log("Conectado ao MongoDB"))
    .catch((err) => console.log(err));

module.exports = mongoose;