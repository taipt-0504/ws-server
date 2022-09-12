import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 19981 });

wss.on("connection", function connection(ws) {
  ws.on("message", (data) => {
    console.log("received: %s", data);
    ws.send("something");
  });

  ws.send(
    JSON.stringify({ message: "Hello", data: "This is data for socket" })
  );
});
