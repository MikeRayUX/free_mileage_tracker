import { useContext, useMemo } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { TripContext } from "../../../context/TripContext";
import { FontAwesome5 } from "@expo/vector-icons";
import { truncateString } from "../../../helpers/string_helpers";
import ClearTripsButton from "../../debug/ClearTripsButton";
import TripCount from "./TripCount";

const debug = false;
const currentYear = new Date().getFullYear();

type PropTypes = {
  toggleAddTripForm: () => void;
};

const AppHeader: React.FC<PropTypes> = ({ toggleAddTripForm }): JSX.Element => {
  const {
    state: { trips },
  } = useContext(TripContext);

  const totalMiles = useMemo(() => {
    if (!trips.length) return 0.0;

    return (
      Math.floor(
        trips.reduce((acc, next) => {
          return acc + next.miles;
        }, 0) * 10.0
      ) / 10.0
    );
  }, [trips]);

  return (
    <View
      style={{ height: "35%" }}
      className={
        "relative shadow white w-full flex flex-col justify-center items-center px-4"
      }
    >
      <View className={""}>
        <Text
          style={{ marginBottom: -5 }}
          className="text-center text-5xl font-black text-gray-800"
        >
          {totalMiles.toFixed(1)} mi.
        </Text>

        <Text
          style={{ letterSpacing: -0.5 }}
          className="text-center text-lg font-bold text-gray-800 mb-2"
        >
          Captured in {currentYear}
        </Text>
      </View>

      <View className={"flex flex-row justify-center items-center mb-4"}>
        <TripCount frequency={"ytd"} />
        <TripCount frequency={"mtd"} />
      </View>

      <View className="w-full flex flex-row justify-center items-center">
        {debug ? <ClearTripsButton /> : null}
        <TouchableOpacity
          onPress={toggleAddTripForm}
          className={
            "py-3 px-12 flex flex-row justify-center items-center rounded-full bg-indigo-600"
          }
        >
          <Text className="text-xl font-semibold text-white pr-4 tracking-wide">
            Add Trip
          </Text>
          <FontAwesome5 name="road" size={28} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppHeader;
