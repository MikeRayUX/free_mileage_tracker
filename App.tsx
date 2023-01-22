import { TripProvider } from "./src/context/TripContext";
import TripsOverviewScreen from "./src/screens/TripsOverviewScreen";
import TripDetailScreen from "./src/screens/TripDetailScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
export default function App() {
  return (
    <TripProvider>
      <NavigationContainer>
        <BottomTab.Navigator>
          <BottomTab.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
              tabBarIcon: ({focused}) => (
                <FontAwesome5 name="home" size={24} color={`${focused ? "blue" : "gray"}`} />
              ),
            }}
          />
          <BottomTab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({focused}) => (
                <FontAwesome5 name="cog" size={24} color={`${focused ? "blue" : "gray"}`} />
              ),
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    </TripProvider>
  );
}

const Home = () => {
  return (
    <Stack.Navigator initialRouteName="TripsOverviewScreen">
      <Stack.Screen
        name="TripsOverviewScreen"
        component={TripsOverviewScreen}
        options={{ headerShown: false, title: null }}
      />
      <Stack.Screen
        name="TripDetailScreen"
        component={TripDetailScreen}
        options={{ title: "Trip Detail" }}
      />
    </Stack.Navigator>
  );
};
