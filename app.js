const express = require("express");
const cors = require("cors");
const path = require("path")


const authRouter = require("./routers/auth");

const app = express()


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Set Middleware Static File
app.use(express.static(path.join(__dirname, "public")))


// Routers
app.use("/auth", authRouter);

app.use((req, res) => {
    return res.status(404).json({
        message: "! 404 page not found please check your method or path"
    })
})

module.exports = app