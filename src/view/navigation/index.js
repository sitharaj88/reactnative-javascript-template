// create stack navigation with counter page

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Counter from "../pages/counter";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Counter">
        <Stack.Screen name="Counter" component={Counter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
