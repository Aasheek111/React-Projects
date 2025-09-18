const express = require("express");
const app = express();
const cors = require("cors");
const { createServer } = require("http");
const { Server } = require("socket.io");

const server = new createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

app.use(cors());
app.get("/", (req, res) => {
  res.send("It's all Guddu");
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("chat", ({ user, message }) => {
    console.log("Message:", message);
    io.emit("chat", { user, message });
  });



  socket.on("offer", (data) => {
    socket.broadcast.emit("offer", data); // send offer to other user
  });

  socket.on("answer", (data) => {
    socket.broadcast.emit("answer", data); // send answer to other user
  });

  socket.on("ice-candidate", (data) => {
    socket.broadcast.emit("ice-candidate", data); // send ICE candidates
  });
  
});

server.listen(3000, () => {
  console.log("Running on port 3000");
});
