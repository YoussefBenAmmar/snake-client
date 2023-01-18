const net = require("net");
const { stdin } = require("process");

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

  // const handleUserInput = function (key) {
  //   if (key === '\u0003'){
  //     process.exit();
  //   }
  // }

  stdin.on("data", handleUserInput);

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = { connect };