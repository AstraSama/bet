const mongoose = require("mongoose");

async function main() {
    await mongoose.connect(mongo_db);

}

main()
    .then(() => console.log("Conectado ao MongoDB"))
    .catch((err) => console.log(err));

module.exports = mongoose;