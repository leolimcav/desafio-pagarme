import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("transactions")
class Transaction {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  value: number;

  @Column()
  description: string;

  @Column()
  payment_method: "debit_card" | "credit_card";

  @Column()
  card_number: string;

  @Column()
  owner_name: string;

  @Column()
  expiration_date: string;

  @Column()
  cvv: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Transaction;
