import { globalStyles } from "@/styles/global";
import React from "react";
import { View, Text, TouchableOpacity, Pressable } from "react-native";

const transactions = [
  { id: "1", description: "Supermercado", amount: -50.75 },
  { id: "2", description: "Salário", amount: 2500.0 },
  { id: "3", description: "Restaurante", amount: -120.4 },
  { id: "4", description: "Aluguel", amount: -800.0 },
];

export default function Index() {
  const name = "Tobias";

  function handleAdd() {
    alert("Receita adicionada");
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.greeting}>Olá, {name}!</Text>
      <Text style={globalStyles.balanceLabel}>Saldo Atual</Text>
      <Text style={globalStyles.balance}>R$ 1.529,85</Text>

      <View style={globalStyles.buttonsContainer}>
        <TouchableOpacity style={globalStyles.button} onPress={handleAdd}>
          <Text style={globalStyles.buttonText}>Adicionar Receita</Text>
        </TouchableOpacity>
        
<Pressable
  onPress={handleAdd}
  style={({ pressed }) => [
    globalStyles.button,
    { backgroundColor: pressed ? "#232323" : "#2C5F30" },
  ]}
>
  {({ pressed }) => (
    <Text style={globalStyles.buttonText}>
      {pressed ? "pressionado..." : "Adicionar Despesa"}
    </Text>
  )}
</Pressable>


      </View>
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
