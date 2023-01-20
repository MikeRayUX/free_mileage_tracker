import { useState, useMemo } from "react";
import { View, Pressable, Text, TextInput } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Trip, FormStep } from "../../../../types";

type PropTypes = {
  setCurrentStep: React.Dispatch<React.SetStateAction<FormStep>>;
  newTrip: Trip;
  setNewTrip: React.Dispatch<React.SetStateAction<Trip>>;
};

const MilesForm: React.FC<PropTypes> = ({ setCurrentStep, newTrip, setNewTrip }): JSX.Element => {
  const [miles, setMiles] = useState<any>(0);

  const formValid = useMemo<boolean>(() => {
    return parseFloat(miles) > 0
  }, [miles])

  const getTotalDeduction = (): number => {
    return Math.floor(miles * newTrip.deductionRate) / 100.00
  }

  const confirmMiles = () => {
    setNewTrip({ ...newTrip, miles: parseFloat(miles), total: getTotalDeduction()});
    setCurrentStep(4)
  };

  return (
    <View className="w-full h-full flex flex-col justify-between items-center pb-4">
      {/* heading/value START */}
      <View className="w-full p-4">
        <Text className="text-2xl font-semibold mb-1 text-center tracking-tightest">
          Miles
        </Text>
        <View
          className={"w-full flex flex-row justify-center items-center gap-x-3"}
        >
          <TextInput
            autoFocus={true}
            style={{ height: 100 }}
            keyboardType={"decimal-pad"}
            className={"text-6xl full font-bold px-1 py-2"}
            returnKeyType="done"
            placeholder={"0"}
            placeholderTextColor={"black"}
            onChangeText={(newValue) => setMiles(newValue)}
            value={miles}
          />
          <Text className="text-5xl font-semibold mb-2 text-center tracking-tightest">
            mi.
          </Text>
        </View>
        <View className={"flex flex-row justify-center items-center "}>
          <FontAwesome5 name="road" size={64} color="black" />
        </View>
      </View>
      {/* heading/value END */}

      {/* next button START */}
      <Pressable
        disabled={!formValid}
        onPress={confirmMiles}
        className={`mt-6 asbolute bottom-0 w-full rounded-full ${formValid ? "bg-indigo-600" : "bg-indigo-300"} py-4 px-4 flex flex-row justify-center items-center mb-4`}
      >
        <Text className="text-xl font-bold text-white">Next</Text>
      </Pressable>
      {/* next button END */}
    </View>
  );
};

export default MilesForm;
