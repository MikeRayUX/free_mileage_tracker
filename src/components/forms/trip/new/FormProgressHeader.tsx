import { View, Text, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

type PropTypes = {
  currentStep: number;
  goBack: () => void
};

const FormProgessHeader: React.FC<PropTypes> = ({
  currentStep,
  goBack
}): JSX.Element => {
  return (
    <View className="w-full flex flex-row justify-between items-center border-b border-gray-400 bg-gray-200 p-4 rounded-t-xl">
      <Pressable
        onPress={goBack}
        className="flex flex-row justify-start items-center"
      >
        <FontAwesome name="chevron-left" size={24} color="black" />
        <Text className="text-xl font-semibold text-center tracking-tightest ml-2">
          Back
        </Text>
      </Pressable>
      <Text className="text-xl font-semibold text-gray-800 text-center tracking-tightest">
        {currentStep}/4
      </Text>
    </View>
  );
};
export default FormProgessHeader;
