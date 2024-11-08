import "react-native-gesture-handler";

import { NavigationContainer, useTheme } from "@react-navigation/native";
import { useContext, useEffect } from "react";
import WithAuthScreens, { OtherStackScreen } from "./WithAuthScreens";
import WithoutAuthScreens from "./WithoutAuthScreens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/RootStackParamList";
import { AuthContext } from "../../context/AuthContext";
import { Alert, Platform } from "react-native";
import container from "@/config-ioc/ioc";
import IUnitOfService from "@/service/interface/IUnitOfService";
import { TYPES } from "@/config-ioc/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function CustomNavigation() {
  const authContext = useContext(AuthContext);
  const { colors } = useTheme();

  const unitOfService = container.get<IUnitOfService>(TYPES.IUnitOfService);


  return (
    <>
      <NavigationContainer independent={true}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {authContext.isAuthenticated ? (
            <>
              <Stack.Screen name="WithAuth" component={WithAuthScreens} />
              <Stack.Screen name="StackScreens" component={OtherStackScreen} />
            </>
          ) : (
            <Stack.Screen name="WithoutAuth" component={WithoutAuthScreens} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
