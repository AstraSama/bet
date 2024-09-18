const db = require("../conn.js");

const Schema = db.Schema;

const bet_Schema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    payment_status: {
        type: Schema.Types.ObjectId,
        ref: 'Payment_status',
        required: true
    },
    status: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    }
});

const Bet = db.model("Bet", bet_Schema);

module.exports = Bet;