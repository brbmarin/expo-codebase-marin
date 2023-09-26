import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { InfromationScreen } from "~screens/information-screen";


export type NavigatorParamList = {
  information: undefined;
};


const Stack = createNativeStackNavigator<NavigatorParamList>();

const AppStack = ({
  initialRoute,
}: {
  initialRoute: keyof NavigatorParamList;
}) => {
  return (
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="information" component={InfromationScreen} />
      </Stack.Navigator>
  );
};

export type NavigationProps = Partial<
  React.ComponentProps<typeof NavigationContainer>
>;

export const AppNavigator = (props: NavigationProps) => {
  
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#1F1F1F",
    },
  };

  return (
    <NavigationContainer {...props} theme={MyTheme}>
      <AppStack initialRoute={"information"} />
    </NavigationContainer>
  );
};

AppNavigator.displayName = "AppNavigator";
