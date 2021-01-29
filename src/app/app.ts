import "reflect-metadata";
import "../config/database";

import express from "express";

import routes from "./routes";

class App {
  public app;

  constructor() {
    this.app = express();
    this.routes();
    // this.middlewares();
  }

  routes() {
    this.app.use(express.json());
    this.app.use(routes);
  }

  // middlewares() {
  // }
}

export default new App().app;
