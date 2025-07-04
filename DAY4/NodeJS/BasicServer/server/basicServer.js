const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    fs.readFile("../client/Index.html", (err, data) => {
      if (!err) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      } else {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("Something went wrong !");
      }
    });
  } else if (req.url == "/client.js") {
    fs.readFile("../client/client.js", (err, data) => {
      if (!err) {
        res.writeHead(200, { "Content-Type": "text/javascript" });
        res.end(data);
      } else {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("Something went wrong !");
      }
    });
  } else if (req.url == "/styles.css") {
    fs.readFile("../client/styles.css", (err, data) => {
      if (!err) {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(data);
      } else {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("Something went wrong !");
      }
    });
  } else if (req.url == "/products") {
    var products = [
      { id: 1, name: "LED TV", price: 50000 },
      { id: 2, name: "MacBookPro", price: 250000 },
      { id: 3, name: "DJI Mavic Pro", price: 450000 },
    ];
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(JSON.stringify(products));
  }
});

// starts a simple http server locally on port 3000
server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000");
});
