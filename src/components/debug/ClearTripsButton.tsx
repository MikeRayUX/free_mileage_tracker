import { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";
import { TripContext } from "../../context/TripContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ClearTripsButton: React.FC = (): JSX.Element => {
  const { dispatch } = useContext(TripContext);

  const clearGlobalTrips = async () => {
    await AsyncStorage.setItem("trips", JSON.stringify([]));
    dispatch({ type: "set_trips", payload: [] });
  };
  return (
    <TouchableOpacity
      onPress={clearGlobalTrips}
      className={
        "py-2 px-5 flex flex-row justify-center items-center rounded-full bg-red-600"
      }
    >
      <Text className="text-base font-bold text-white">Clear Trips</Text>
    </TouchableOpacity>
  );
};
export default ClearTripsButton;
