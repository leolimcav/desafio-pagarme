import { Router, Request, Response } from "express";
import TransactionsRoutes from "./transactions.routes";

const routes = Router();

routes.get("/", (request: Request, response: Response) => {
  return response.json("Hello World");
});

routes.use(TransactionsRoutes);

export default routes;
