import React from "react";
import { Modal, Pressable, Text, View } from "react-native";
import { styles } from "./style";
import { PrimaryButton } from "../PrimaryButton";

type TransactionModalProps = {
  visible: boolean;
  onClose: () => void;
  onSave: (data: { description: string; amount: number }) => void;
};

export const TransactionModal: React.FC<TransactionModalProps> = ({
  onSave,
  onClose,
  visible,
}) => {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modalContent}>
        <Text style={styles.title}>Adicionar Transação</Text>

        <Text>Descrição</Text>
        <Text>Valor</Text>

        <View style={styles.buttonsContainer}>
          <PrimaryButton
            text="Salvar transação"
            onPress={() => onSave({ description: "", amount: 0 })}
          />

          <Pressable onPress={onClose} style={{ padding: 10 }}>
            <Text>Fechar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};
