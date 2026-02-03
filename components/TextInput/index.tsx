import { Modal, Text, TextInput, View } from "react-native";
import { styles } from "./style";
import { PrimaryButton } from "../PrimaryButton";
import { useState } from "react";

type ModalProps = {
  visible: boolean;
  onClose: () => void;
  onSave: (data: { description: string; amount: string }) => void;
};

export const TransactionModal: React.FC<ModalProps> = ({
  onSave,
  onClose,
  visible,
}) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const [savedDescription, setSavedDescription] = useState("");
  const [savedAmount, setSavedAmount] = useState("");

  const handleSave = () => {
    onSave({ description, amount });

    setSavedDescription(description);
    setSavedAmount(amount);

    setDescription("");
    setAmount("");
  };
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modalContent}>
        <Text style={styles.title}>Adicionar Transação</Text>

        <Text>Descrição</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Descrição"
          value={description}
          onChangeText={setDescription}
        />

        <Text>Valor</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Valor"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />

        <View style={styles.buttonsContainer}>
          <PrimaryButton text="Salvar" onPress={handleSave} />
          <PrimaryButton text="Cancelar" onPress={onClose} />
        </View>
        
        {savedDescription !== "" && (
          <View>
            <Text>Resumo:</Text>
            <Text>Descrição: {savedDescription}</Text>
            <Text>Valor: R$ {savedAmount}</Text>
          </View>
        )}
      </View>
    </Modal>
  );
};
