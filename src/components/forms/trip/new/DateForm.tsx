import { View, Text, Pressable } from "react-native";
import { useState, useMemo, useContext } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { getFormattedDate } from "../../../../helpers/date_helpers";
import { FontAwesome5 } from "@expo/vector-icons";
import { FormStep } from "../../../../types";
import { TripContext } from "../../../../context/TripContext";

type PropTypes = {
  setCurrentStep: React.Dispatch<React.SetStateAction<FormStep>>;
};

const DateForm: React.FC<PropTypes> = ({ setCurrentStep }): JSX.Element => {
  const {
    state: { newTrip },
    dispatch,
  } = useContext(TripContext);

  const today = new Date();
  const beginningOfYear = new Date(today.getFullYear(), 0, 1);
  const [selectedDate, setSelectedDate] = useState<Date>(today);

  const formattedDate = useMemo(() => {
    return getFormattedDate(selectedDate);
  }, [selectedDate]);

  const confirmDate = () => {
    dispatch({
      type: "set_new_trip",
      payload: { ...newTrip, date: selectedDate, formattedDate },
    });
    setCurrentStep(2);
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
            value={selectedDate}
            minimumDate={beginningOfYear}
            maximumDate={today}
            mode={"date"}
            display={"spinner"}
            onChange={(_event: any, selectedDate: Date) =>
              setSelectedDate(selectedDate)
            }
            textColor="black"
            className={"py-2 w-full"}
          />
        </View>
        {/* next button START */}
        <Pressable
          onPress={() => confirmDate()}
          className="mt-6 asbolute bottom-0 w-full rounded-full bg-primary py-4 px-4 flex flex-row justify-center items-center mb-4"
        >
          <Text className="text-xl font-bold text-white">Next</Text>
        </Pressable>
        {/* next button END */}
      </View>
    </View>
  );
};

export default DateForm;
