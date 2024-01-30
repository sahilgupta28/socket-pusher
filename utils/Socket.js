let io;
class Socket {
  constructor(server) {
    io = server;
  }

  sendMessage() {
    io.on("connection", function (socket) {
      console.log("connected");
      io.sockets.emit("show_notification", {
        title: "hello",
        message: "khfdksjghfjkgh",
      });
    });
  }
}

module.exports = Socket;
