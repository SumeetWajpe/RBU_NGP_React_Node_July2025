// import express from "express";
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// products.js
var products = [
  { id: 1, name: "LED TV", price: 50000 },
  { id: 2, name: "MacBookPro", price: 250000 },
  { id: 3, name: "DJI Mavic Pro", price: 450000 },
];

// middleware
app.use(express.static("src/client")); // middleware -> extra funcyionality on top of default
app.use(express.json());

// api / endpoints
app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/newproduct", (req, res) => {
  const payload = req.body;
  console.log(payload);
  products.push(payload);
  res.send("Product added successfully !");
});

// server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
