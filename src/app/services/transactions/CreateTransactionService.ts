import { getRepository } from "typeorm";
import Transaction from "../../models/transactions";

interface IRequest {
  value: number;
  description: string;
  payment_method: "debit_card" | "credit_card";
  card_number: string;
  expiration_date: string;
  cvv: string;
  owner_name: string;
}

export default class CreateTransactionService {
  public async execute({
    value,
    description,
    payment_method,
    card_number,
    expiration_date,
    cvv,
    owner_name,
  }: IRequest): Promise<Transaction> {
    const transactionsRepo = getRepository(Transaction);

    const cardLastFourNumbers = card_number.slice(
      card_number.length - 4,
      card_number.length
    );

    const createTransaction = transactionsRepo.create({
      description,
      card_number: cardLastFourNumbers,
      cvv,
      expiration_date,
      owner_name,
      payment_method,
      value,
    });

    const newTransaction = await transactionsRepo.save(createTransaction);

    return newTransaction;
  }
}
