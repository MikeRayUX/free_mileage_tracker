import { useState, useContext, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { View, ScrollView, Keyboard } from "react-native";
import AppHeader from "./src/components/AppHeader";
import NewTripFormModal from "./src/components/forms/trip/new/NewTripFormModal";
import { TripProvider } from "./src/context/TripContext";

export default function App() {
  const [newTripFormVisible, setNewTripFormVisible] = useState<boolean>(false);
  const total: number = 240.94;

  const toggleAddTripForm = (): void => {
    if (newTripFormVisible) Keyboard.dismiss();
    console.log("toggleAddTripForm()");
    setNewTripFormVisible(!newTripFormVisible);
  };

  return (
    <TripProvider>
      <View className="h-full w-full flex flex-col justify-start items-center">
        <StatusBar />
        <ScrollView className="w-full">
          <AppHeader toggleAddTripForm={toggleAddTripForm} total={total} />
        </ScrollView>
        <NewTripFormModal
          setNewTripFormVisible={setNewTripFormVisible}
          newTripFormVisible={newTripFormVisible}
        />
      </View>
    </TripProvider>
  );
}
