import { useState,useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TripContext } from "../context/TripContext";
import ConfirmActionModal from "../components/modals/ConfirmActionModal";

const SettingsScreen = ({ navigation }) => {
  const { state: {trips}, dispatch } = useContext(TripContext);
  const [confirmDelete, setConfirmDelete] = useState<boolean>(false);

  const clearGlobalTrips = async () => {
    try {
      await AsyncStorage.setItem("trips", JSON.stringify([]));
      dispatch({ type: "set_trips", payload: [] });
      setConfirmDelete(false)
    } catch(e) {
      console.log(e)
    }
  };

  return (
    <View className="w-full h-full bg-gray-200 p-6 flex flex-col justify-between items-center">
      <Text>SettingsScreen</Text>
      <DeleteTripsButton onPress={() => setConfirmDelete(true)} disabled={trips.length === 0} />
      <ConfirmActionModal
        isVisible={confirmDelete}
        onBackdropPress={() => setConfirmDelete(false)}
        onConfirm={clearGlobalTrips}
        confirmText={`This will permanently delete ${trips.length} trips. Are you sure?`}
        />
    </View>
  );
};

const DeleteTripsButton = ({onPress, disabled}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      className={
        `w-full py-3 px-5 flex flex-row justify-center items-center rounded-full ${disabled ? "bg-gray-400" : "bg-red-600"}`
      }
    >
      <Text className="text-base font-bold text-white">Delete All Trips</Text>
    </TouchableOpacity>
  )

}
export default SettingsScreen;
