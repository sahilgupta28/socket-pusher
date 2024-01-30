var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

io.on("connection", function (socket) {
  console.log("connected");
});

app.get("/", function (req, res) {
  res.sendFile("index.html", { root: "." });
});

app.post("/send-message", jsonParser, function (req, res) {
  const { channel_name, data } = req.body;
  console.log(data);
  io.sockets.emit(channel_name, { data });
  res.sendStatus(200);
});

http.listen(3000, function () {
  console.log("listening on localhost:3000");
});
