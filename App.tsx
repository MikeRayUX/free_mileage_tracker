import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className={"h-screen flex-col justify-center items-center"}>
      <Text className={"text-4xl font-bold text-red-900 text-center"}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
