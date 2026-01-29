import { TransactionModal } from "@/components/modal";
import { PrimaryButton } from "@/components/PrimaryButton";
import { globalStyles } from "@/styles/global";
import React, { useState } from "react";
import { View, Text } from "react-native";

const transactions = [
  { id: "1", description: "Supermercado", amount: -50.75 },
  { id: "2", description: "Salário", amount: 2500.0 },
  { id: "3", description: "Restaurante", amount: -120.4 },
  { id: "4", description: "Aluguel", amount: -800.0 },
];

export default function Index() {
  const name = "Tobias";
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddTransaction = () => {
    setModalVisible(true);
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
        onSave={(data) => {
          alert(`Receita adicionada:\n\n${JSON.stringify(data)}`);
          setModalVisible(false);
        }}
      />

      <Text style={globalStyles.sectionTitle}>Transações Recentes</Text>

      {transactions.map((transaction) => (
        <View key={transaction.id} style={globalStyles.transactionItem}>
          <Text style={globalStyles.transactionText}>
            {transaction.description}
          </Text>
          <Text
            style={[
              globalStyles.transactionAmount,
              transaction.amount > 0
                ? globalStyles.income
                : globalStyles.expense,
            ]}
          >
            R$ {transaction.amount}
          </Text>
        </View>
      ))}
    </View>
  );
}
