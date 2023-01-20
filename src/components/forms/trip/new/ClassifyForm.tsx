import { useState, useMemo, useContext } from "react";
import { Picker } from "@react-native-picker/picker";
import { View, Text, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { FormStep, TripClassification } from "../../../../types";
import { PURPOSE_OPTIONS } from "../../../../contants/constants";
import { TripContext } from "../../../../context/TripContext";

type PropTypes = {
  setCurrentStep: React.Dispatch<React.SetStateAction<FormStep>>;
};

const ClassifyForm: React.FC<PropTypes> = ({ setCurrentStep }): JSX.Element => {
  const {
    state: { newTrip },
    dispatch,
  } = useContext(TripContext);
  const [selectedClassification, setSelectedClassification] = useState<string>(
    PURPOSE_OPTIONS[0]
  );

  const currentIcon = useMemo(() => {
    switch (selectedClassification) {
      case "Medical/Moving":
        return { name: "briefcase-medical", color: "red" };
      case "Business":
        return { name: "briefcase", color: "#8B5A38" };
      case "Charitable":
        return { name: "hand-holding-heart", color: "blue" };
      default:
        break;
    }
  }, [selectedClassification]);

  const getDeductionRate = () => {
    switch (selectedClassification) {
      case "Business":
        return 65.5;
      case "Medical/Moving":
        return 22;
      case "Charitable":
        return 14;
      default:
        break;
    }
  };

  const confirmClassification = () => {
    dispatch({
      type: "set_new_trip",
      payload: {
        ...newTrip,
        classification: selectedClassification as TripClassification,
        deductionRate: getDeductionRate(),
      },
    });
    setCurrentStep(3);
  };

  return (
    <View className="w-full h-full flex flex-col justify-between items-center pb-4">
      {/* heading/value START */}
      <View className="w-full p-4">
        <Text className="text-2xl font-semibold mb-1 text-center tracking-tightest">
          Classification
        </Text>
        <Text className="text-4xl font-bold mb-2 text-center tracking-tightest">
          {selectedClassification}
        </Text>
        <View className={"flex flex-row justify-center items-center "}>
          <FontAwesome5
            name={currentIcon.name}
            size={48}
            color={currentIcon.color}
          />
        </View>
      </View>
      {/* heading/value END */}

      {/* value select START */}
      <View style={{ width: "100%", height: 200 }} className="w-full">
        <Picker
          selectedValue={selectedClassification}
          onValueChange={(itemValue) => setSelectedClassification(itemValue)}
        >
          {PURPOSE_OPTIONS.map((option) => (
            <Picker.Item key={option} label={option} value={option} />
          ))}
        </Picker>
      </View>
      {/* value select START */}

      {/* next button START */}
      <Pressable
        onPress={confirmClassification}
        className="mt-6 asbolute bottom-0 w-full rounded-full bg-indigo-600 py-4 px-4 flex flex-row justify-center items-center mb-4"
      >
        <Text className="text-xl font-bold text-white">Next</Text>
      </Pressable>
      {/* next button END */}
    </View>
  );
};

export default ClassifyForm;
