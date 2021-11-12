import React from 'react';

import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

    const { width } = useWindowDimensions();

    return (
        <Drawer.Navigator
            screenOptions={{
                drawerType: width >= 768 ? 'permanent' : 'front',
                headerShown: false
            }}

            drawerContent={
                (props) => <MenuInterno {...props} />
            }
        >
            <Drawer.Screen name="StackNavigator" component={StackNavigator} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        </Drawer.Navigator >
    );
}

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>

            {/* Avatar */}
            <View style={
                styles.avatarContainer
            }>
                <Image
                    source={{
                        // uri: 'https://stonegatesl.com/wp-content/uploads/2021/01/avatar.jpg'
                        uri: 'https://scontent-scl2-1.xx.fbcdn.net/v/t39.30808-6/203506545_10225503010940686_3456846905197795027_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=1_HzMF-BzqoAX_Quh9V&_nc_ht=scontent-scl2-1.xx&oh=77fd14632b8724a7114fd37e46235db7&oe=619304DC'
                    }}
                    style={
                        styles.avatar
                    }
                />
                <Text
                    style={{
                        paddingTop: 15
                    }}
                >Hola, Miguel Veloso!!</Text>
            </View>

            {/* Opciones del menú */}
            <View style={styles.menuContainer}>
                <TouchableOpacity style={styles.menuBoton}
                    onPress={() => navigation.navigate('StackNavigator')}
                >
                    <Text style={styles.menuTexto}>Navegación</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuBoton}
                    onPress={() => navigation.navigate('SettingsScreen')}
                >
                    <Text style={styles.menuTexto}>Ajustes</Text>
                </TouchableOpacity>
            </View>

        </DrawerContentScrollView>
    );
}