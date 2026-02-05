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
// https://complex-humor-1df.notion.site/build-2fdcc8c2db968001b578c5ea908c90ef