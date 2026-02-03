import { createContext, useContext, useState } from "react";

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

  function addTransaction(description: string, amount: number) {
    setTransactions((prev) => [
      ...prev,
      {
        id: String(Date.now()),
        description,
        amount,
      },
    ]);
  }

  const balance = transactions.reduce((total, item) => total + item.amount, 0);

  return (
    <TransactionContext.Provider
      value={{ transactions, addTransaction, balance }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error("ERRO");
  }
  return context;
}
