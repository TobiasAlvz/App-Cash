import { styles } from "./style";

type ModalProps = {
  visible?: boolean;
  onClose?: () => void;
  onSave: (data: { description: string; amount: number }) => void;
};
