import React from 'react'
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { styles } from '../theme/appTheme';

export const AboutScreen = () => {

    const navigator = useNavigation();

    return (
        <View style={styles.globalMargin}>
            <Text>
                About
            </Text>
            <Button
                title="Ir a Contacto"
                onPress={() => navigator.navigate('Contact' as never)}
            />
        </View>
    )
}
