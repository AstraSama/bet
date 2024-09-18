const db = require("../conn.js");

const Schema = db.Schema;

const match_Schema = new Schema({
    competitors: {
        a: {
            type:  Schema.Types.ObjectId,
            ref: 'Competitor',
            status: '',
            required: true
        },
        b: {
            type:  Schema.Types.ObjectId,
            ref: 'Competitor',
            status: '',
            required: true
        }
    }
});

const Match = db.model("Match", match_Schema);

module.exports = Match;