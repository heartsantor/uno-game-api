const express = require("express");
const http = require("http");
const cors = require("cors");
const Socket = require("socket.io");
const logger = require("morgan");
const { getCard } = require("./DB/Cards");
const {
  createServer,
  joinServer,
  getServer,
  getAllServers,
} = require("./DB/Servers");
const { addPlayer, removePlayer, getPlayer } = require("./DB/PlayersSockets");

const app = express();
app.use(logger("dev"));
app.use(cors());
const server = http.createServer(app);
const io = Socket(server, {
  cors: {
    origin: "*",
  },
});

module.exports = {
  server,
  io,
};
