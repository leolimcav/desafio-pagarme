import CreateTransactionService from "../fakes/CreateTransactionService";

describe("Transactions Service", () => {
  it("should return a new transaction", async () => {
    const createTransaction = new CreateTransactionService();

    const transaction = {
      value: 123,
      description: "Transaction",
      card_number: "1234432156788765",
      expiration_date: "07/28",
      cvv: "123",
      owner_name: "Leonardo Lima Cavalcante",
    };

    const newTransaction = await createTransaction.execute({
      card_number: transaction.card_number,
      cvv: transaction.cvv,
      description: transaction.description,
      expiration_date: transaction.expiration_date,
      owner_name: transaction.owner_name,
      payment_method: "credit_card",
      value: transaction.value,
    });

    expect(newTransaction).toHaveProperty("id");
  });
});
