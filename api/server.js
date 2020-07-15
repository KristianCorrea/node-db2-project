const express = require("express")
const carsRouter = require("./carsRouter")
const server = express();
server.use(express.json());

server.use("/api/cars", carsRouter);
server.get("/", (req, res) => {
    res.status(200).json({ serverStatus: "Online"})
})

module.exports = server;