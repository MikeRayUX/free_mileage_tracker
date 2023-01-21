import { TripProvider } from "./src/context/TripContext";
import HomeScreen from "./src/screens/HomeScreen"

export default function App() {
  return (
    <TripProvider>
      <HomeScreen />
    </TripProvider>
  );
}
