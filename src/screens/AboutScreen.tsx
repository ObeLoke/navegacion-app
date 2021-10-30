import React from 'react'
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { styles } from '../theme/appTheme';
import { useEffect } from 'react';

export const AboutScreen = () => {

    const navigator = useNavigation();

    useEffect(() => {
        navigator.setOptions({
            headerBackTitle: 'Atrás'
        })
    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                About
            </Text>
            <Button
                title="Ir a Contacto"
                onPress={() => navigator.navigate('ContactScreen' as never)}
            />
        </View>
    )
}
