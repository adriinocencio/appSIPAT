import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

// Importando telas
import HomeScreen from './HomeScreen';
import ScheduleScreen from './ScheduleScreen';
import NotificationsScreen from './NotificationsScreen';
import SafetyTipsScreen from './SafetyTipsScreen';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home-outline';
            } else if (route.name === 'Schedule') {
              iconName = 'calendar-outline';
            } else if (route.name === 'Notifications') {
              iconName = 'notifications-outline';
            } else if (route.name === 'SafetyTips') {
              iconName = 'shield-outline';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#4CAF50', // Verde vibrante
          inactiveTintColor: 'gray',
          style: {
            backgroundColor: '#fff',
            borderTopWidth: 0,
            elevation: 10,
            height: 60,
          },
          labelStyle: {
            fontSize: 12,
            marginBottom: 5,
          },
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Schedule" component={ScheduleScreen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
        <Tab.Screen name="SafetyTips" component={SafetyTipsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;