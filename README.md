# bet

Wallet: {
 - balance: Number (Computed)
 - password: String (Encrypt)
}

User: {
 - email: String,
 - cpf: String,
 - nickname: String,
 - password: String (Encrypt),
 - wallet: Ref,
 - acceptedTerms: Boolean
}

PaymentStatus: {
 - name: String
}

BetStatus : {
 - name: String
}

Competitor: {
 - name: String
}

Match: {
 - competitors: {
    - a: {
       - ref: Ref,
       - status: Ref
     }
    - b: {       
        - ref: Ref,
       - status: Ref
     }
}
 - start: Date
}

MatchBet: {
 - bet: Ref,
 - match: Ref,
 - odd: Number
 - competitor: Ref 
}

RouletteBet: {
 - bet: Ref
 - betNumber: Number,
 - drawnNumber: Number
}

JackpotBet: {
 - bet: Ref,
 - numbers: [Number]
}

Bet: {
 - user: Ref,
- paymentSatus: Ref,
- status: Ref,
 - value: Number,
 - date: Date
}
