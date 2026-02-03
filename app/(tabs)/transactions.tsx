import { View, Text, FlatList } from "react-native";
import { globalStyles } from "@/styles/global";
import { useTransactions } from "@/TransactionContext";

export default function TransactionsScreen() {
  const { transactions } = useTransactions();

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.sectionTitle}>Transações</Text>

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
}
