import { useContext, useMemo } from "react";
import { View, Text } from "react-native";
import { TripContext } from "../../../context/TripContext";
import { getCurrentMonth, getCurrentYear } from "../../../helpers/date_helpers";

type PropTypes = {
  frequency: "ytd" | "mtd";
};

const TripCount: React.FC<PropTypes> = ({ frequency }): JSX.Element => {
  const {
    state: { trips },
  } = useContext(TripContext);


  const tripsXTD = useMemo(() => {
    if (!trips.length) return 0;

    switch(frequency) {
      case 'mtd':
      return trips.filter(
        (trip) => trip.formattedDate.split("/").at(0) === getCurrentMonth()
      ).length;
      case 'ytd':
      return trips.filter(
        (trip) => trip.formattedDate.split("/").at(-1) === getCurrentYear()
      ).length;
    }
  }, [trips]);

  const readableFrequency = useMemo(() => {
    switch (frequency) {
      case "mtd":
        return "month";
      case "ytd":
        return "year";
    }
  }, [trips]);

  return (
    <View className={"flex flex-col justify-start items-start mx-6"}>
      <Text
        style={{ marginBottom: -8, letterSpacing: -1 }}
        className={"text-lg font-semibold text-primary leading-none"}
      >
        {tripsXTD} Trips
      </Text>
      <Text style={{letterSpacing: -0.5 }}className={"text-lg font-bold text-gray-900 leading-none"}>
        This {readableFrequency}
      </Text>
    </View>
  );
};

export default TripCount;
