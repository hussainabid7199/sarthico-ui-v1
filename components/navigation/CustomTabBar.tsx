import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';

const CustomTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        // if (route.name === "TicketList") {
        //   return null; // Skip rendering the tab you want to hide
        // }

        if (
          route.name !== 'TicketList' &&
          route.name !== 'CreateTicket' &&
          route.name !== 'TicketNotification' &&
          route.name !== 'Search' &&
          route.name !== 'MyProfile' &&
          route.name !== 'Menu' &&
          route.name !== 'Home'
        ) {
          return null; // Skip rendering the tab you want to hide
        }

        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        return (
          <TouchableOpacity key={route.key} onPress={() => navigation.navigate(route.name)} style={styles.tabBarButton}>
            {options.tabBarIcon &&
              options.tabBarIcon({
                focused: state.index === index,
                color: state.index === index ? '#4c84ff' : '#4c4545',
                size: 24,
              })}

            <Text style={styles.tabBarLabel}>{label.toString()}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#fff',
    bottom: Platform.OS === 'ios' ? 15 : 0,
  },
  tabBarButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarLabel: {
    fontSize: 8,
    marginTop: 0,
    color: '#808080',
  },
});

export default CustomTabBar;
