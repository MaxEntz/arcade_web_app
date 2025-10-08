var express = require('express');
const port = process.env.port || 5000

const app = express();

app.get("/", (requ, res) => {
    res.json({message: "Bienvenue sur la base f3ck 42"})
})

const user = require("./routes/user")
app.use("/user", user)

app.listen(port, () => {
    console.log("Serveur ene ligne !");
})
