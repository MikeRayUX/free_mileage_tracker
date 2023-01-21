import { useState, useContext, useEffect} from "react";
import { StatusBar } from "expo-status-bar";
import { View, ScrollView, Keyboard} from "react-native";
import AppHeader from "../components/AppHeader";
import NewTripFormModal from "../components/forms/trip/new/NewTripFormModal";
import { TripContext } from "../context/TripContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TripItem from "../components/screens/home_screen/TripItem";

const HomeScreen = () => {
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
    } catch (e) {
    }
  };

  return (
    <View className="w-full flex flex-col justify-start items-center">
      <StatusBar />
      <AppHeader toggleAddTripForm={toggleAddTripForm}/>

      <NewTripFormModal
        setNewTripFormVisible={setNewTripFormVisible}
        newTripFormVisible={newTripFormVisible}
      />

      {/* trip list start */}
      <View
        style={{ height: "60%" }}
        className={"w-full flex flex-col justify-start items-center "}
      >
        <ScrollView>
          {trips.length
            ? trips.map((trip) => <TripItem key={trip.id} trip={trip} />)
            : null}
        </ScrollView>
      </View>
      {/* trip list end */}
    </View>
  );
}

export default HomeScreen
