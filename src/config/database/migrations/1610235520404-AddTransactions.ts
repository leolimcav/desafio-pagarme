import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class AddTransactions1610235520404
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: "transactions",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            generationStrategy: "increment",
            isGenerated: true,
            isNullable: false,
          },
          {
            name: "value",
            type: "float",
            isNullable: false,
          },
          {
            name: "description",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "payment_method",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "card_number",
            type: "varchar",
            length: "4",
            isNullable: false,
          },
          {
            name: "owner_name",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "expiration_date",
            type: "date",
            isNullable: false,
          },
          {
            name: "cvv",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
            isNullable: false,
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
            isNullable: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable("transactions");
  }
}
