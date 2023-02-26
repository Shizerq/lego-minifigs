import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootStackParamList } from "./types/navigation";

import {
  BeginDrawingScreen,
  SelectFigureScreen,
  DetailsFormScreen,
  SummaryScreen,
} from "./screens";

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <>
      {/* eslint-disable-next-line react/style-prop-object */}
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="BeginDrawing" component={BeginDrawingScreen} />
          <Stack.Screen name="SelectFigure" component={SelectFigureScreen} />
          <Stack.Screen name="DetailsForm" component={DetailsFormScreen} />
          <Stack.Screen
            name="Summary"
            component={SummaryScreen}
            options={{
              presentation: "modal",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
