const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    const hitTime = new Date().toLocaleString();
    const userIp = (
      req.socket.remoteAddress || req.connection.remoteAddress
    ).replace("::ffff:", "");

    console.log(`Page got hit by IP: ${userIp} at ${hitTime}`);

    fs.appendFile("log.txt", `IP: ${userIp} at ${hitTime}\n`, (err) => {
      if (err) console.error("Error writing to log:", err);
    });

    const parsedUrl = url.parse(req.url, true);
    console.log("Parsed URL:", parsedUrl);

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello from home page");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page Not Found");
  }
});

const port = 4000;
server.listen(port, () => console.log("Server running on port", port));
