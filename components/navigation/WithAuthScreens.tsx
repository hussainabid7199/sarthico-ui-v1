import "react-native-gesture-handler";

import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import {
  AuthStackParamList,
  StackScreensParamList,
} from "../../types/RootStackParamList";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "@react-navigation/native";
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import container from "@/config-ioc/ioc";
import IUnitOfService from "@/service/interface/IUnitOfService";
import { TYPES } from "@/config-ioc/types";
import { AuthContext } from "@/context/AuthContext";
import { UserJwtDto } from "@/dtos/UserJwtDto";
import CustomTabBar from "./CustomTabBar";
import ProfileScreen from "@/screens/ProfileScreen";
import HomeScreen from "@/screens/HomeScreen";


const Tab = createBottomTabNavigator<AuthStackParamList>();
const AllStackScreens = createNativeStackNavigator<StackScreensParamList>();

export const OtherStackScreen = () => {
  const { colors } = useTheme();

  return (
    <AllStackScreens.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: "#fff",
        headerBackTitleVisible: false,
      }}
    >
      <AllStackScreens.Screen
        name="MyProfile"
        component={ProfileScreen}
        options={{ title: "My Profile" }}
      />
      
    </AllStackScreens.Navigator>
  );
};

const WithAuthScreens = () => {
  const unitOfService = container.get<IUnitOfService>(TYPES.IUnitOfService);
  const [notificationCount, setNotificationCount] = useState<string>("");

  const [currentUserRole, setCurrentUserRole] = useState<
    string | undefined | null
  >();
  const [currentUserDetails, setCurrentUserDetails] =
    useState<UserJwtDto | null>();
  const authContext = useContext(AuthContext);

  useLayoutEffect(() => {
    (async () => {
      const currentUser = await authContext.decodeJwt();
      setCurrentUserDetails(currentUser);
      if (currentUser) {
        setCurrentUserRole(currentUser.UserRoleName);
      }
    })();
  }, []);

  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          tabBarLabel: "Home",
        }}
      />


      {/* <Tab.Screen
        name="TicketNotification"
        component={TicketNotificationScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <>
              <View>
                <Ionicons name="notifications" size={size} color={color} />
                {notificationCount && (
                  <View style={styles.notification}>
                    <Text style={styles.notificationText}>
                      {notificationCount}
                    </Text>
                  </View>
                )}
              </View>
            </>
          ),
          tabBarLabel: "Notifications",
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default WithAuthScreens;

const styles = StyleSheet.create({
  tabIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -25,
  },
  notification: {
    position: "absolute",
    top: -10,
    right: -10,
    backgroundColor: "red",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 20,
    height: 20,
  },
  notificationText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});
