import { View, Text, Pressable } from "react-native";

type PropTypes = {
  toggleAddTripForm: () => void;
  total: number;
};

const AppHeader: React.FC<PropTypes> = ({
  toggleAddTripForm,
  total,
}): JSX.Element => {
  return (
    <View
      className={
        "relative shadow bg-white w-full h-60 border-b border-gray-400 flex flex-col justify-center items-center"
      }
    >
      <Text
        style={{ letterSpacing: -2.3 }}
        className="text-center text-4xl font-semibold text-gray-800 mb-2 "
      >
        Total Mileage 
      </Text>
      <Text
        style={{ letterSpacing: -2.3 }}
        className="text-center text-5xl font-bold text-indigo-600 mb-8 "
      >
        ${total}
      </Text>

      <Pressable
        onPress={toggleAddTripForm}
        className={
          "absolute bottom-5 right-5 py-0 px-5 flex flex-row justify-center items-center rounded-full bg-green-600"
        }
      >
        <Text className="text-3xl text-white mr-2 mb-1">+</Text>
        <Text className="text-base font-bold text-white">Add Trip</Text>
      </Pressable>
    </View>
  );
};

export default AppHeader;
