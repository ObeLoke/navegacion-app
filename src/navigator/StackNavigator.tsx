import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { AboutScreen } from '../screens/AboutScreen';
import { ContactScreen } from '../screens/ContactScreen';
import PersonaScreen from '../screens/PersonaScreen';


export type RootStackParams = {
    HomeScreen: undefined,
    AboutScreen: undefined,
    ContactScreen: undefined,
    PersonaScreen: { id: number, nombre: string },
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    elevation: 0,
                    shadowColor: 'transparent'
                },
                cardStyle: {
                    backgroundColor: 'white',
                }
            }}
        >
            <Stack.Screen name="HomeScreen" options={{ title: "Home" }} component={HomeScreen} />
            <Stack.Screen name="AboutScreen" options={{ title: "About" }} component={AboutScreen} />
            <Stack.Screen name="ContactScreen" options={{ title: "Contact" }} component={ContactScreen} />
            <Stack.Screen name="PersonaScreen" options={{ title: "Persona" }} component={PersonaScreen} />
        </Stack.Navigator>
    );
}