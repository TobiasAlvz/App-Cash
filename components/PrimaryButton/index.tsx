import { ActivityIndicator, Pressable, Text } from "react-native";
import { styles } from "./style";

type PrimaryButtonProps = {
  text: string;
  loading?: boolean;
  onPress: () => void;
};

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  loading = false,
  onPress,
}) => {
  return (
    <Pressable
      disabled={loading}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: pressed ? "#232323" : "#2C5F30",
          opacity: loading ? 0.7 : 1,
        },
      ]}
    >
      {loading ? (
        <ActivityIndicator size="small" color="#FFF" />
      ) : (
        <Text style={styles.buttonText}>{text}</Text>
      )}
    </Pressable>
  );
};
