import { Modal, Text, TextInput, View } from "react-native";
import { styles } from "./style";
import { PrimaryButton } from "../PrimaryButton";
import { useState } from "react";

type ModalProps = {
  visible: boolean;
  onClose: () => void;
  onSave: (data: { description: string; amount: number }) => void;
};

export const TransactionModal: React.FC<ModalProps> = ({
  onSave,
  onClose,
  visible,
}) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={false}
      onRequestClose={onClose}
    >
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
          <PrimaryButton
            text="Salvar"
            onPress={() => {
              onSave({ description, amount: +amount });
              setDescription("");
              setAmount("");
            }}
          />
          <PrimaryButton text="Cancelar" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};
