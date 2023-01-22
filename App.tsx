import { TripProvider } from "./src/context/TripContext";
import HomeScreen from "./src/screens/HomeScreen";
import TripDetail from "./src/screens/TripDetail";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TripProvider>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: null }}
          />
          <Stack.Screen
            name="TripDetail"
            component={TripDetail}
            options={{ title: "Trip Detail" }}
          />
        </Stack.Navigator>
      </TripProvider>
    </NavigationContainer>
  );
}
