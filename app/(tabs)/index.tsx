import React, { useState } from "react";
import { View, Text, FlatList, Alert } from "react-native";
import { TransactionModal } from "@/components/TextInput";
import { PrimaryButton } from "@/components/PrimaryButton";
import { globalStyles } from "@/styles/global";
import { useTransactions } from "@/TransactionContext";

export default function Index() {
  const { transactions, addTransaction, balance } = useTransactions();
  const [modalVisible, setModalVisible] = useState(false);

  function handleSave(data: { description: string; amount: string }) {
    const parsedAmount = Number(data.amount.replace(",", "."));

    if (isNaN(parsedAmount)) {
      if (isNaN(parsedAmount)) {
        Alert.alert("Erro", "Valor inválido");
        return;
      }
      return;
    }

    addTransaction(data.description, parsedAmount);
    setModalVisible(false);
  }
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.greeting}>Olá!</Text>

      <Text style={globalStyles.balanceLabel}>Saldo Atual</Text>
      <Text style={globalStyles.balance}>R$ {balance.toFixed(2)}</Text>

      <PrimaryButton
        text="Adicionar Transação"
        onPress={() => setModalVisible(true)}
      />

      <Text>Total de transações:{transactions.length}</Text>
      
      {transactions.length === 0 && <Text>Nenhuma Transação Adicionada</Text>}

      <TransactionModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={handleSave}
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
    </View>
  );
}
