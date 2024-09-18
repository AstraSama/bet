const db = require("../conn.js");

const Schema = db.Schema;

const match_bet_Schema = new Schema({
    bet: {
        type: Schema.Types.ObjectId,
        ref: 'Bet',
        required: true
    },
    match: {
        type: Schema.Types.ObjectId,
        ref: 'Match',
        required: true
    },
    odd: {
        type: Number,
        required: true
    },
    competitor: {
        type: Schema.Types.ObjectId,
        ref: 'Competitor',
        required: true
    }
});

const Match_bet = db.model("Match_bet", match_bet_Schema);

module.exports = Match_bet;
// type: Schema.Types.ObjectId,
// ref: 'User',
// required: true