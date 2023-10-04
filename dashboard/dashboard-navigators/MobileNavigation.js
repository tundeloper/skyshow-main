import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// ======screens=========
import DashboardLogin from '../DashboardLogin';
import DashboardScreen from '../DashboardScreen';
import UsersScreen from '../UsersScreen';


const Stack = createNativeStackNavigator();

function DashboardStack () {
    return(
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: 'transparent'
            },
            headerTintColor: white,
            headerTransparent: true,
            headerTitle: '',
            headerLeftContainerStyle: {
                paddingLeft: 20
            }
        }}
       > 

       <Stack.Screen name='DashboardLogin' component={DashboardLogin}/>
       <Stack.Screen name='DashboardScreen' component={DashboardScreen}/>
       <Stack.Screen name='UsersScreen' component={UsersScreen}/>
        </Stack.Navigator>
    )
}