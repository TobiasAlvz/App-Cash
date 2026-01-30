import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { TransactionModal } from "@/components/TextInput";
import { PrimaryButton } from "@/components/PrimaryButton";
import { globalStyles } from "@/styles/global";

export default function Index() {
  const name = "Tobias";

  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const transactions = [
    { id: "1", description: "Supermercado", amount: -50.75 },
    { id: "2", description: "Salário", amount: 2500.0 },
    { id: "3", description: "Restaurante", amount: -120.4 },
    { id: "4", description: "Aluguel", amount: -800.0 },
    { id: "5", description: "Ração do cachorro", amount: -199.99 },
    { id: "6", description: "Ida ao cinema", amount: -54.78 },
    { id: "7", description: "Freela", amount: 1600.0 },
    { id: "8", description: "Contas de luz", amount: -252.91 },
  ];

  const handleAddTransaction = () => {
    setModalVisible(true);
  };

  const handleSaveIncome = (data: { description: string; amount: number }) => {
    setLoading(true);

    setTimeout(() => {
      alert(`Receita adicionada:\n\n${JSON.stringify(data, null, 2)}`);
      setLoading(false);
      setModalVisible(false);
    }, 500);
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.greeting}>Olá, {name}!</Text>

      <Text style={globalStyles.balanceLabel}>Saldo Atual</Text>
      <Text style={globalStyles.balance}>R$ 1.529,85</Text>

      <View style={globalStyles.buttonsContainer}>
        <PrimaryButton
          text="Adicionar Transação"
          onPress={handleAddTransaction}
        />
      </View>

      <TransactionModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={handleSaveIncome}
      />

      <Text style={globalStyles.sectionTitle}>Transações Recentes</Text>

      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={globalStyles.transactionItem}>
            <Text style={globalStyles.transactionText}>
              {item.description}
            </Text>
            <Text
              style={[
                globalStyles.transactionAmount,
                item.amount >= 0
                  ? globalStyles.income
                  : globalStyles.expense,
              ]}
            >
              R$ {item.amount.toFixed(2)}
            </Text>
          </View>
        )}
      />

      <PrimaryButton
        text="Processando..."
        loading={loading}
        onPress={() => {}}
      />
    </View>
  );
}
