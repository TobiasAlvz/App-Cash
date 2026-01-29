import { Pressable, Text } from "react-native";
import { styles } from "./style";

type PrimaryButtonProps = {
  text: string;
  onPress?: () => void;
};

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  onPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: pressed ? "#232323" : "#2C5F30" },
      ]}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};
