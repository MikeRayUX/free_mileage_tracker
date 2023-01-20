import { useState, useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { getFormattedDate } from "../../../../helpers/date";
import { FontAwesome5 } from "@expo/vector-icons";
import { FormStep, Trip } from "../../../../types";

type PropTypes = {
  setCurrentStep: React.Dispatch<React.SetStateAction<FormStep>>;
  newTrip: Trip;
  setNewTrip: React.Dispatch<React.SetStateAction<Trip>>;
};

const DateForm: React.FC<PropTypes> = ({
  setCurrentStep,
  newTrip,
  setNewTrip,
}) => {
  const today = new Date();
  const beginningOfYear = new Date(today.getFullYear(), 0, 1);
  const [selectedDate, setSelectedDate] = useState<Date>(today);
  const [formattedDate, setFormattedDate] = useState<string>(
    getFormattedDate(today)
  );

  const onDateChange = (_event: any, selectedDate: Date) => {
    setSelectedDate(selectedDate);
    setFormattedDate(getFormattedDate(selectedDate));
  };

  const confirmDate = () => {
    setNewTrip({ ...newTrip, date: selectedDate, formattedDate});
    setCurrentStep(2)
  };

  return (
    <View className="w-full h-full flex flex-col justify-between items-center pb-4">
      {/* heading/value START */}
      <View className="w-full p-4">
        <Text className="text-2xl font-semibold mb-1 text-center tracking-tightest">
          Date
        </Text>
        <Text className="text-4xl font-bold mb-2 text-center tracking-tightest">
          {formattedDate}
        </Text>
        <View
          className={
            "opacity-0 invisible flex flex-row justify-center items-center "
          }
        >
          <FontAwesome5 name="calendar-day" size={48} color="#19B124" />
        </View>
      </View>
      {/* heading/value END */}
      <View className="w-full">
        <View style={{ height: 200 }}>
          <DateTimePicker
            testID="dateTimePicker"
            value={selectedDate}
            maximumDate={today}
            minimumDate={beginningOfYear}
            is24Hour={true}
            mode={"date"}
            display={"spinner"}
            onChange={onDateChange}
            className={"py-2 w-full"}
          />
        </View>
        {/* next button START */}
        <Pressable
          onPress={() => confirmDate()}
          className="mt-6 asbolute bottom-0 w-full rounded-full bg-indigo-600 py-4 px-4 flex flex-row justify-center items-center mb-4"
        >
          <Text className="text-xl font-bold text-white">Next</Text>
        </Pressable>
        {/* next button END */}
      </View>
    </View>
  );
};

export default DateForm;
