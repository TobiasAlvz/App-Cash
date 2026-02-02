import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },

  greeting: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 20,
  },

  balanceLabel: {
    fontSize: 16,
    color: "#777",
  },

  balance: {
    fontSize: 32,
    fontWeight: "600", // corrigido
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 12,
  },

  transactionItem: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 14,
    marginBottom: 10,
    elevation: 1,
  },

  transactionText: {
    fontSize: 16,
  },

  transactionAmount: {
    fontSize: 16,
    fontWeight: "700",
  },

  income: {
    color: "green",
  },

  expense: {
    color: "red",
  },
});
