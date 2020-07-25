import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {  Icon } from 'native-base';


import Getstart from '../../Screen/Getstart/Getstart'
import Login from './../../Screen/Login/Login'
import Signup from './../../Screen/Signup/Signup'
import Home from './../../Screen/Home/Home'
import Aconut from './../../Screen/Acount/Acount'
import Setting from './../../Screen/Setting/Setting'
import Notification from './../../Screen/Notification/Notification'

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Getstart" component={Getstart} options={{headerShown: false}}/> */}
        {/* <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/> */}
        {/* <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}}/> */}
        <Stack.Screen name="Home" component={BottomNavigation} options={{headerShown: false}}/>

      </Stack.Navigator>
  
    </NavigationContainer>
  );
}




const Tab = createBottomTabNavigator();

function BottomNavigation() {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Home" component={Home} 
    
       options={{
         tabBarLabel: 'Profile',
         tabBarIcon: ({ color, size }) => (
           <Icon android="md-settings" style={{fontSize: 20, color: 'red'}} />
         ),
       }}
      />
      <Tab.Screen name="Account" component={Aconut} />
      <Tab.Screen name="Setting"   component={Setting} />
      <Tab.Screen name="Notification"  component={Notification} />
      
    </Tab.Navigator>
  );
}

export default StackNavigation