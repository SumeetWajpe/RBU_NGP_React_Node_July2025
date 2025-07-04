// import express from "express";
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  //   res.send("Hello World!");
  res.sendFile("Index.html", { root: __dirname + "/../client" });
});
app.get("/styles.css", (req, res) => {
  //   res.send("Hello World!");
  res.sendFile("styles.css", { root: __dirname + "/../client" });
});
app.get("/client.js", (req, res) => {
  //   res.send("Hello World!");
  res.sendFile("client.js", { root: __dirname + "/../client" });
});
app.get("/products", (req, res) => {
  var products = [
    { id: 1, name: "LED TV", price: 50000 },
    { id: 2, name: "MacBookPro", price: 250000 },
    { id: 3, name: "DJI Mavic Pro", price: 450000 },
  ];

  res.json(products);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
