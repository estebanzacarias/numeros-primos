const express = require("express");
const app = express();

app.use(express.json());

app.use("/number", require("./routes/number"));

app.listen(3000);
console.log("Servidor en puerto", 3000);

module.exports = app;
