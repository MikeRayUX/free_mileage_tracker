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

    return trips.reduce((acc, trip) => {
      return acc + trip.miles;
    }, 0);
  }, [trips]);

  return (
    <View
      style={{ height: "45%" }}
      className={
        "relative shadow white w-full border-b border-gray-400 flex flex-col justify-center items-center"
      }
    >
      <View className={""}>
        <Text
          style={{ letterSpacing: -0.5 }}
          className="text-center text-lg font-bold text-gray-800 mb-4 "
        >
          Miles captured in {currentYear}
        </Text>
        <Text
          style={{}}
          className="text-center text-6xl font-bold text-gray-800"
        >
          {truncateString(totalMiles.toFixed(1).toLocaleString(), 10)} mi.
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
            "py-4 w-full flex flex-row justify-center items-center rounded-3xl bg-gray-900"
          }
        >
          <Text className="text-2xl font-semibold text-white pr-4 tracking-wide">
            Add Trip
          </Text>
          <FontAwesome5 name="road" size={36} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppHeader;
