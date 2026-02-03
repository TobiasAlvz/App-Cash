import { createContext, useState } from "react";

type Transaction = {
  id: string;
  description: string;
  amount: number;
};

type TransactionContextData = {
  transactions: Transaction[];
  addTransaction: (description: string, amount: number) => void;
  balance: number;
};

const TransactionContext = createContext<TransactionContextData | null>(null);

export function TransactionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
}
