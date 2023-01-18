const net = require("net");
const { stdin } = require("process");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,

  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect", () => {
    conn.write("Name: BOO");
  });

  // interpret incoming data as text
  conn.setEncoding("utf8")

  return conn;
};

module.exports = { connect };