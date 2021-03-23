import { Router } from "express";
import CreateTransactionService from "../services/transactions/CreateTransactionService";

const transactionsRoutes = Router();

transactionsRoutes.post("/transactions", async (request, response) => {
  const createTransaction = new CreateTransactionService();
  const {
    value,
    description,
    card_number,
    expiration_date,
    cvv,
    owner_name,
  } = request.body;

  const newTransation = await createTransaction.execute({
    value,
    description,
    card_number,
    expiration_date,
    cvv,
    owner_name,
    payment_method: "credit_card",
  });

  return response.status(201).json(newTransation);
});

export default transactionsRoutes;
