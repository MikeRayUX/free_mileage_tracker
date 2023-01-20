import { useState, useMemo } from "react";
import { View, Text, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Trip, FormStep, TripClassification } from "../../../../types";
import AsyncStorage from '@react-native-async-storage/async-storage';

type PropTypes = {
  newTrip: Trip;
  dismissModal: () => void
};

const ConfirmForm: React.FC<PropTypes> = ({
  newTrip,
  dismissModal
}): JSX.Element => {

  const createTrip = async (): Promise<void> => {
    // console.log('newTrip')
    // console.log(newTrip)
    try {
      let existingTrips = JSON.parse(await AsyncStorage.getItem('trips') || "[]")
      // console.log('existingTrips:', existingTrips)
      await AsyncStorage.setItem('trips', JSON.stringify([...existingTrips, newTrip]))
      dismissModal()
    } catch (e) {
      console.log('error',e)
    }
  };

  return (
    <View className="w-full h-full flex flex-col justify-between items-center pb-4">
      {/* heading/value START */}
      <View className="w-full p-4">
        <Text className="text-2xl font-bold mb-3 text-center tracking-tightest">
          Finalize Trip
        </Text>
      </View>
      <View className="w-full flex flex-col justify-start items-center px-0 ">
        <LineItem name="Date" value={newTrip.formattedDate} />
        <LineItem name="Classification" value={newTrip.classification} />
        <LineItem name="Mileage Rate" value={`$${newTrip.deductionRate / 100} /mi.`} />
        <LineItem name="Miles" value={newTrip.miles} />
        <View className="flex flex-col justify-start items-center py-2">
          <Text style={{letterSpacing: -2.5}}className="text-5xl font-bold text-green-700 tracking-tighter">${newTrip.total}</Text>
          <Text className="text-2xl font-bold text-gray-800 tracking-tighter">Total Deduction</Text>
        </View>
      </View>
      {/* heading/value END */}

      {/* next button START */}
      <Pressable
        onPress={() => createTrip()}
        className="mt-6 asbolute bottom-0 w-full rounded-full bg-indigo-600 py-4 px-4 flex flex-row justify-center items-center mb-4"
      >
        <Text className="text-xl font-bold text-white">Save Trip</Text>
      </Pressable>
      {/* next button END */}
    </View>
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

export default ConfirmForm;
