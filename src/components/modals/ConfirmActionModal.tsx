import { View, Text, Pressable } from "react-native";
import Modal from "react-native-modal";

type PropTypes = {
  isVisible: boolean;
  onBackdropPress: () => void;
  onConfirm: () => void;
  confirmText: string;
};

const ConfirmActionModal: React.FC<PropTypes> = ({
  isVisible,
  onBackdropPress,
  onConfirm,
  confirmText,
}): JSX.Element => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onBackdropPress}
      avoidKeyboard={false}
    >
      <View className={"flex rounded-xl bg-white py-8 px-4"}>
        <Text className="text-xl font-bold text-gray-900 mb-4 text-center">
          {confirmText}
        </Text>
        <Pressable
          onPress={onBackdropPress}
          className="my-3 w-full border border-gray-900 bg-white rounded-full py-4 px-4 flex flex-row justify-center items-center mb-4"
        >
          <Text className="text-xl font-bold text-gray-900">No</Text>
        </Pressable>
        <Pressable
          onPress={onConfirm}
          className="my-3 w-full rounded-full bg-red-600 py-4 px-4 flex flex-row justify-center items-center mb-4"
        >
          <Text className="text-xl font-bold text-white">Yes, Delete</Text>
        </Pressable>
      </View>
    </Modal>
  );
};
export default ConfirmActionModal;
