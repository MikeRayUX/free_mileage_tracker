import { TripProvider } from "./src/context/TripContext";
import HomeScreen from "./src/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <TripProvider>
        <HomeScreen />
      </TripProvider>
    </NavigationContainer>
  );
}
