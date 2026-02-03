import { TransactionProvider } from "@/TransactionContext";
import { Stack } from "expo-router";
export default function RootLayout() {
  return (
    <TransactionProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </TransactionProvider>
  );
}
