const db = require("../conn.js");

const Schema = db.Schema;

const bet_status_Schema = new Schema({
    name: {
        type: String,
        required: true
    }
});

const Bet_status = db.model("Bet_status", bet_status_Schema);

module.exports = Bet_status;