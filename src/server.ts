import "reflect-metadata";

import express from "express";

import "./config/database";

const server = express();

server.use("/", (req, res) => {
  return res.json({ status: "Running" });
});

server.listen(3000, () => {
  console.log("Running on 3000");
});
