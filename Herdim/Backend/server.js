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

  // ✅ Chat Feature
  socket.on("chat", ({ user, message }) => {
    console.log("Message:", message);
    io.emit("chat", { user, message });
  });

  // ✅ WebRTC Signaling
  socket.on("offer", (data) => {
    console.log("Forwarding offer from", socket.id, "to", data.to);
    socket.to(data.to).emit("offer", { sdp: data.sdp, from: socket.id });
  });

  socket.on("answer", (data) => {
    console.log("Forwarding answer from", socket.id, "to", data.to);
    socket.to(data.to).emit("answer", { sdp: data.sdp, from: socket.id });
  });

  socket.on("ice-candidate", (data) => {
    console.log("Forwarding candidate from", socket.id, "to", data.to);
    socket.to(data.to).emit("ice-candidate", { candidate: data.candidate, from: socket.id });
  });

  // ✅ Disconnect
  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

server.listen(3000, () => {
  console.log("Running on port 3000");
});
