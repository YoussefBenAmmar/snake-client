const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '192.168.0.59',
    port: 50541,

  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  // conn.on("connect", () => {
  //   conn.write(`Move: up`);

  //   setInterval(() => {
  //     conn.write('Move: left');
  //   }, 5000);

  // });

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = connect;