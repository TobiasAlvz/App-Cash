import React, { useState } from "react";
import { View, Text, FlatList, Alert } from "react-native";
import { TransactionModal } from "@/components/TextInput";
import { PrimaryButton } from "@/components/PrimaryButton";
import { globalStyles } from "@/styles/global";
import { Link } from "expo-router";

type Transaction = {
  id: string;
  description: string;
  amount: number;
};

export default function Index() {
  const name = "Tobias";

  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const transactions: Transaction[] = [
    { id: "1", description: "Supermercado", amount: -50.75 },
    { id: "2", description: "Salário", amount: 2500 },
    { id: "3", description: "Restaurante", amount: -120.4 },
  ];

  const handleSaveIncome = (data: {
    description: string;
    amount: string; // 👈 STRING, porque vem do TextInput
  }) => {
    setLoading(true);

    const parsedAmount = Number(data.amount.replace(",", "."));

    if (isNaN(parsedAmount)) {
      Alert.alert("Erro", "Valor inválido");
      setLoading(false);
      return;
    }

    setTimeout(() => {
      Alert.alert(
        "Transação salva",
        JSON.stringify(
          {
            description: data.description,
            amount: parsedAmount,
          },
          null,
          2,
        ),
      );
      setLoading(false);
      setModalVisible(false);
    }, 500);
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.greeting}>Olá, {name}!</Text>

      <Text style={globalStyles.balanceLabel}>Saldo Atual</Text>
      <Text style={globalStyles.balance}>R$ 1.529,85</Text>

      <PrimaryButton
        text="Adicionar Transação"
        onPress={() => setModalVisible(true)}
        loading={loading}
      />

      <TransactionModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={handleSaveIncome}
      />

      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={globalStyles.transactionItem}>
            <Text>{item.description}</Text>
            <Text>R$ {item.amount.toFixed(2)}</Text>
          </View>
        )}
      />

      <Link href="/transactions" asChild>
        <Text style={{ color: "blue", marginTop: 16 }}>
          Todas as transações
        </Text>
      </Link>
    </View>
  );
}
