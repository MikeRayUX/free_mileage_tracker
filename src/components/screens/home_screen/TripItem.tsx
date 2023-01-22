import { View, Text, TouchableOpacity } from "react-native";
import { Trip } from "../../../types";
import { truncateString } from "../../../helpers/string_helpers";
import { FontAwesome5 } from "@expo/vector-icons";

type PropTypes = {
  trip: Trip;
  onPress: () => void;
};

const TripItem: React.FC<PropTypes> = ({ trip, onPress }): JSX.Element => {
  let date = trip.formattedDate;
  let miles = truncateString(trip.miles.toFixed(2), 6);
  let classification = truncateString(trip.classification, 11);

  return (
    <TouchableOpacity
      onPress={onPress}
      className="w-full px-8 py-4 bg-white flex flex-row justify-between items-center border-b border-gray-200"
    >
      {/* left side */}
      <View className={"w-3/4 flex flex-col justify-center items-start"}>
        <View className={"flex flex-row justify-start items-end"}>
          <View className="flex flex-row justify-start items-end mr-2">
            <Text
              style={{ letterSpacing: -2 }}
              className={"font-bold text-primary text-3xl leading-none mr-1"}
            >
              {miles}
            </Text>
          </View>
          <View className="flex flex-row justify-start items-end">
            <Text
              style={{ letterSpacing: 0 }}
              className={"font-bold text-gray-900 text-xl leading-none mr-1"}
            >
              mi.
            </Text>
          </View>
        </View>
        <View className={"flex flex-row justify-start items-center space-x-4"}>
          <View className={"flex flex-col justify-start items-start"}>
            <Text
              style={{ marginBottom: -6 }}
              className={"font-medium text-primary text-base leading-none"}
            >
              Date
            </Text>
            <Text
              style={{ marginBottom: 3 }}
              className={"text-base font-semibold text-gray-700 leading-none"}
            >
              {date}
            </Text>
          </View>
          <View className={"flex flex-col justify-start items-start"}>
            <Text
              style={{ marginBottom: -6 }}
              className={"font-medium text-primary text-base leading-none"}
            >
              Classification
            </Text>
            <Text
              style={{ marginBottom: 3 }}
              className={"text-base font-semibold text-gray-700 leading-none"}
            >
              {classification}
            </Text>
          </View>
        </View>
      </View>

      {/* right side */}
      <View className={"w-1/4 flex flex-col justify-center items-end"}>
        <FontAwesome5 name="chevron-right" size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
};

export default TripItem;
