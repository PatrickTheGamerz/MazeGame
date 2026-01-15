const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

let nextPlayerId = 1;
const rooms = new Map(); // mazeId -> Map(playerId, ws)

function broadcastToRoom(mazeId, msg, exceptId = null) {
  const room = rooms.get(mazeId);
  if (!room) return;
  for (const [pid, ws] of room.entries()) {
    if (ws.readyState === WebSocket.OPEN && pid !== exceptId) {
      ws.send(JSON.stringify(msg));
    }
  }
}

wss.on("connection", (ws) => {
  let playerId = null;
  let mazeId = null;

  ws.on("message", (data) => {
    let msg;
    try { msg = JSON.parse(data.toString()); } catch { return; }

    if (msg.type === "join") {
      playerId = nextPlayerId++;
      mazeId = msg.mazeId;
      if (!rooms.has(mazeId)) rooms.set(mazeId, new Map());
      rooms.get(mazeId).set(playerId, ws);

      ws.send(JSON.stringify({ type: "welcome", playerId }));
      broadcastToRoom(mazeId, { type: "playerJoined", playerId }, playerId);
    }

    if (msg.type === "state" && playerId !== null && mazeId !== null) {
      broadcastToRoom(mazeId, {
        type: "state",
        playerId,
        x: msg.x,
        y: msg.y,
        loop: msg.loop
      }, playerId);
    }

    if (msg.type === "exit" && playerId !== null && mazeId !== null) {
      broadcastToRoom(mazeId, {
        type: "exit",
        playerId,
        loop: msg.loop
      }, null);
    }
  });

  ws.on("close", () => {
    if (mazeId !== null && playerId !== null) {
      const room = rooms.get(mazeId);
      if (room) {
        room.delete(playerId);
        broadcastToRoom(mazeId, { type: "playerLeft", playerId }, null);
        if (room.size === 0) rooms.delete(mazeId);
      }
    }
  });
});

console.log("WebSocket server running on ws://localhost:8080");
