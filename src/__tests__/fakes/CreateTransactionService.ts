import Transaction from "../../app/models/transactions";

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
    const transactionsRepo: Transaction[] = [];

    const cardLastFourNumbers = card_number.slice(
      card_number.length - 4,
      card_number.length
    );

    const createTransaction: Transaction = {
      id: transactionsRepo.length + 1,
      description,
      card_number: cardLastFourNumbers,
      cvv,
      expiration_date,
      owner_name,
      payment_method,
      value,
      created_at: new Date(),
      updated_at: new Date(),
    };

    transactionsRepo.push(createTransaction);

    return createTransaction;
  }
}
