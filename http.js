const http = require("http");
const f = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    const hitTime = new Date().toLocaleString();
    const userIp = req.socket.remoteAddress || req.connection.remoteAddress;

    console.log(`Page got hit by IP: ${userIp} at ${hitTime}`);

    // Append log to file
    f.appendFile("log.txt", `IP: ${userIp} at ${hitTime}\n`, (err) => {
      if (err) console.log(err);
    });

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello from home page");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page Not Found");
  }
});

const port = 3000;
server.listen(port, () => console.log("Server running on port", port));

//we created a server which will log the ip address and time of visit to a file named log.txt whenever the home page is accessed
