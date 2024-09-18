const db = require("../conn.js");

const Schema = db.Schema;

const jackpot_bet_Schema = new Schema({
    bet: {
        type: Schema.Types.ObjectId,
        ref: 'Bet',
        required: true
    },
    numbers: {
        type: Array,
        required: true
    }
});

const Jackpot_bet = db.model("Jackpot_bet", jackpot_bet_Schema);

module.exports = Jackpot_bet;