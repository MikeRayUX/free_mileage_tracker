import { useContext, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { TripContext } from "../context/TripContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Modal from "react-native-modal";

const TripDetail = ({ route, navigation }) => {
  const {
    state: { trips },
    dispatch,
  } = useContext(TripContext);

  const [confirmDelete, setConfirmDelete] = useState(false)

  const [trip] = trips.filter((item) => item.id === route.params.id);

  const deleteTrip = async () => {
    const newTrips = trips.filter((item) => item.id !== trip.id);

    dispatch({ type: "set_trips", payload: newTrips });
    await AsyncStorage.setItem("trips", JSON.stringify(newTrips));
    setConfirmDelete(false)
    navigation.navigate("Home");
  };

  return (
    <>
      {trip ? (
        <View className="w-full h-full flex flex-col justify-center items-center pb-4 px-4">
          <View className="w-full flex flex-col justify-start items-center px-0 ">
            <LineItem name="Date" value={trip.formattedDate} />
            <LineItem name="Classification" value={trip.classification} />
            <LineItem
              name="Mileage Rate"
              value={`$${trip.deductionRate / 100} /mi.`}
            />
            <LineItem name="Miles" value={trip.miles} />
            <View className="flex flex-col justify-start items-center py-2">
              <Text
                style={{ letterSpacing: -2.5 }}
                className="text-5xl font-bold text-green-700 tracking-tighter"
              >
                ${trip.total.toFixed(2)}
              </Text>
              <Text className="text-2xl font-bold text-gray-800 tracking-tighter">
                Total Deduction
              </Text>
            </View>
          </View>

          <Pressable
            onPress={() => setConfirmDelete(true)}
            className="mt-6 asbolute bottom-0 w-full rounded-full bg-red-600 py-4 px-4 flex flex-row justify-center items-center mb-4"
          >
            <Text className="text-xl font-bold text-white">Delete Trip</Text>
          </Pressable>

      <Modal
        isVisible={confirmDelete}
        onBackdropPress={() => setConfirmDelete(false)}
        avoidKeyboard={false}
      >
        <View className={"flex rounded-xl bg-white py-8 px-4"}>
              <Text className="text-xl font-bold text-gray-900 mb-4 text-center">Are you sure?</Text>
          <Pressable
            onPress={() => setConfirmDelete(false)}
            className="my-3 w-full border border-gray-900 bg-white rounded-full py-4 px-4 flex flex-row justify-center items-center mb-4"
          >
            <Text className="text-xl font-bold text-gray-900">No</Text>
          </Pressable>
          <Pressable
            onPress={deleteTrip}
            className="my-3 w-full rounded-full bg-red-600 py-4 px-4 flex flex-row justify-center items-center mb-4"
          >
            <Text className="text-xl font-bold text-white">Yes, Delete</Text>
          </Pressable>
        </View>
      </Modal>
        </View>
      ) : null}
    </>
  );
};

const LineItem = ({ name, value }): JSX.Element => {
  return (
    <View className="w-full flex flex-row justify-between items-center px-4  mb-3">
      <Text className="text-xl font-bold text-center tracking-tightest">
        {name}
      </Text>
      <Text className="text-xl font-regular text-center tracking-tightest">
        {value}
      </Text>
    </View>
  );
};

export default TripDetail;
