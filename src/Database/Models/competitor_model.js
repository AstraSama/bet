const db = require("../conn.js");

const Schema = db.Schema;

const competitor_Schema = new Schema({
    name: {
        type: String,
        required: true
    }
});

const Competitor = db.model("Competitor", competitor_Schema);

module.exports = Competitor;