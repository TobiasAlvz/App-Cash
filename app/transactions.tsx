import { FlatList, Text, View } from "react-native";
import { globalStyles } from "@/styles/global";

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

const TransactionsScreen = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.sectionTitle}>Transações Recentes</Text>

      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={globalStyles.transactionItem}>
            <Text style={globalStyles.transactionText}>{item.description}</Text>
            <Text
              style={[
                globalStyles.transactionAmount,
                item.amount >= 0 ? globalStyles.income : globalStyles.expense,
              ]}
            >
              R$ {item.amount.toFixed(2)}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default TransactionsScreen;
