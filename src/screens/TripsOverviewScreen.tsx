import { useState, useContext, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { View, ScrollView, Keyboard, Text, Image } from "react-native";
import AppHeader from "../components/screens/trips_overview_screen/AppHeader";
import NewTripFormModal from "../components/forms/trip/new/NewTripFormModal";
import { TripContext } from "../context/TripContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TripItem from "../components/screens/trips_overview_screen/TripItem";
import GrayedIcon from "../components/GrayedIcon";

const TripsOverviewScreen = ({ navigation }) => {
  const {
    state: { trips },
    dispatch,
  } = useContext(TripContext);

  const [newTripFormVisible, setNewTripFormVisible] = useState<boolean>(false);

  useEffect(() => {
    getTrips();
  }, []);

  const toggleAddTripForm = (): void => {
    if (newTripFormVisible) Keyboard.dismiss();
    console.log("toggleAddTripForm()");
    setNewTripFormVisible(!newTripFormVisible);
  };

  const getTrips = async () => {
    try {
      let trips = JSON.parse((await AsyncStorage.getItem("trips")) || "[]");
      dispatch({ type: "set_trips", payload: trips });
    } catch (e) {}
  };

  const onTripItemPress = (id: string): void => {
    navigation.navigate("TripDetailScreen", { id });
  };

  return (
    <View className="w-full flex flex-col justify-start items-center bg-white">
      <StatusBar />
      <AppHeader toggleAddTripForm={toggleAddTripForm} />

      <NewTripFormModal
        setNewTripFormVisible={setNewTripFormVisible}
        newTripFormVisible={newTripFormVisible}
      />

      <View style={{ height: "65%" }} className={"w-full bg-white px-4 pb-10"}>
        {trips.length ? (
          <>
            <Text className="text-lg font-bold text-gray-900 mb-4 text-left">
              Trips
            </Text>
            <ScrollView>
              {trips.map((trip) => (
                <TripItem
                  key={trip.id}
                  trip={trip}
                  onPress={() => onTripItemPress(trip.id)}
                />
              ))}
            </ScrollView>
          </>
        ) : (
          <View className="w-full flex flex-col justify-center items-center pt-10">
            <Text className="text-gray-700 text-center mb-4 font-semibold text-3xl">
              Tap the "Add Trip" button to Get Started
            </Text>
            <GrayedIcon />
          </View>
        )}
      </View>
    </View>
  );
};

export default TripsOverviewScreen;
