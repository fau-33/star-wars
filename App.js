import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TelaInicial from "./components/TelaInicial";
import TelaTrilogia1 from "./components/TelaTrilogia1";
import TelaTrilogia2 from "./components/TelaTrilogia2";
import TelaTrilogia3 from "./components/TelaTrilogia3";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#111",
          },
          headerTintColor: "#f3e344",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 22,
          },
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen name="Tela Inicial" component={TelaInicial} />
        <Stack.Screen name="Tela Trilogia 1" component={TelaTrilogia1} />
        <Stack.Screen name="Tela Trilogia 2" component={TelaTrilogia2} />
        <Stack.Screen name="Tela Trilogia 3" component={TelaTrilogia3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
