// import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import { useEffect } from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';


// interface Props extends StackScreenProps<any, any> { };
interface Props extends DrawerScreenProps<any, any> { };

export const HomeScreen = ({ navigation }: Props) => {

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Button
                    title="Menú"
                    onPress={() => navigation.toggleDrawer()} />
            )
        })

    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                Home
            </Text>

            <Button
                title="Ir a About"
                onPress={() => navigation.navigate('AboutScreen')}
            />

            <Text style={styles.title}> Navegar con argumentos </Text>

            <View
                style={{
                    flexDirection: 'row'
                }}
            >
                <TouchableOpacity
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 1,
                        nombre: 'Pedro'
                    })}
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#5856D6'
                    }}
                >
                    <Text style={styles.botonGrandeTexto}>Pedro</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 2,
                        nombre: 'Alberto'
                    })}
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#FF9427'
                    }}
                >
                    <Text style={styles.botonGrandeTexto}>Alberto</Text>
                </TouchableOpacity>

            </View>
            {/* <Button
                title="Ir persona"
                onPress={() => navigation.navigate('PersonaScreen')}
            /> */}
        </View>
    )
}
