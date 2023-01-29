import { useMemo } from "react";
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
  let miles = truncateString(trip.miles.toFixed(1), 6);

  const getCurrentIcon = () => {
    switch (trip.classification) {
      case "Medical/Moving":
        return { name: "briefcase-medical", color: "red" };
      case "Business":
        return { name: "briefcase", color: "#8B5A38" };
      case "Charitable":
        return { name: "hand-holding-heart", color: "blue" };
      default:
        break;
    }
  };

  const currentIcon = getCurrentIcon();

  return (
    <TouchableOpacity
      onPress={onPress}
      className="w-full px-4 py-4 flex flex-row justify-evenly items-center bg-gray-100 rounded-2xl mb-2"
    >
      {/* left side */}
      <View className={"w-2/4 flex flex-col justify-center items-start"}>
        <View className={"flex flex-row justify-start items-end"}>
          <View className="flex flex-row justify-start items-end"></View>
        </View>
        <View className={"flex flex-row justify-start items-center space-x-4"}>
          <View className={"flex flex-col justify-start items-start bg-gray-900 p-3 rounded-2xl"}>
            <FontAwesome5
              name={currentIcon.name}
              size={26}
              color={"white"}
            />
          </View>

          <View className={"flex flex-col justify-start items-start"}>
            <Text
              style={{ marginBottom: -6 }}
              className={"font-semibold text-gray-900 text-base leading-none"}
            >
              Date
            </Text>
            <Text
              className={"text-base font-bold text-gray-900 leading-none"}
              style={{ marginBottom: 3 }}
            >
              {date}
            </Text>
          </View>
        </View>
      </View>

      {/* right side */}
      <View className={"w-2/4 flex flex-col justify-center items-end"}>
        <View className="flex flex-row justify-start items-end mr-2">
          <Text
            style={{ letterSpacing: -2 }}
            className={"font-black text-gray-900 text-3xl leading-none mr-1"}
          >
            {miles}
          </Text>
          <Text
            style={{ letterSpacing: 0 }}
            className={"font-bold text-gray-900 text-xl leading-none mr-1"}
          >
            mi.
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TripItem;
