import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

type Transaction = {
  id: string;
  description: string;
  amount: number;
};

type TransactionContextData = {
  transactions: Transaction[];
  addTransaction: (description: string, amount: number) => void;
  balance: number;
  clearTransactios: () => void;
};

const TransactionContext = createContext<TransactionContextData | null>(null);

export function TransactionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function saveTransactions(data: Transaction[]) {
    try {
      await AsyncStorage.setItem("@transactions", JSON.stringify(data));
    } catch (error) {
      console.log("Erro ao salvar", error);
    }
  }

  async function loadTransiction() {
    try {
      const data = await AsyncStorage.getItem("@transactions");
      if (data) {
        setTransactions(JSON.parse(data));
      }
    } catch (error) {
      console.log("Erro ao carregar", error);
    }
  }
  // adiciona uma transação
  function addTransaction(description: string, amount: number) {
    if (!description || !amount) {
      Alert.alert("ERRO", "Preencha todos os campos");
      return;
    }

    const newTransiction = {
      id: String(Date.now()),
      description,
      amount,
    };

    setTransactions((prev) => {
      const update = [...prev, newTransiction];
      saveTransactions(update);
      return update;
    });
  }

  const clearTransactios = async () => {
    try {
      await AsyncStorage.removeItem("@transactions");
      setTransactions([]);
    } catch (error) {
      console.log("Erro ao apagar lista", error);
    }
  };
  // roda a função apenas uma vez, quando o app abre
  useEffect(() => {
    loadTransiction();
  }, []);

  const balance = transactions.reduce((total, item) => total + item.amount, 0);

  return (
    <TransactionContext.Provider
      value={{ transactions, addTransaction, balance, clearTransactios }}
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
