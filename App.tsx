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
        <BottomTab.Navigator
          screenOptions={{
            tabBarStyle: {
              bottom: 20,
              left: 20,
              right: 20,
              elevation: 0,
              paddingTop: 10,
              paddingBottom: 10,
              borderRadius: "20%",
              position: "absolute",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: 'black',
              height: 65
            },
          }}
        >
          <BottomTab.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({ focused }) => (
                <FontAwesome5
                  name="home"
                  size={26}
                  color={`${focused ? "white" : "gray"}`}
                />
              ),
            }}
          />
          <BottomTab.Screen
            name="Settings"
            component={Settings}
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({ focused }) => (
                <FontAwesome5
                  name="cog"
                  size={26}
                  color={`${focused ? "white" : "gray"}`}
                />
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
        options={{ headerShown: true, title: null }}
      />
      <Stack.Screen
        name="TripDetailScreen"
        component={TripDetailScreen}
        options={{ title: "Trip Detail" }}
      />
    </Stack.Navigator>
  );
};

const Settings = () => {
  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen
        name="SettingsOverview"
        component={SettingsScreen}
        options={{ title: "Settings" }}
      />
    </Stack.Navigator>
  );
};
