import React from 'react'
import { Button, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> { }

export const ContactScreen = ({ navigation }: Props) => {

    return (
        <View style={styles.globalMargin}>
            <Text>
                Contact
            </Text>

            <Button
                title="Regresar..."
                onPress={() => navigation.pop()}
            />

            <Button
                title="Ir al inicio"
                onPress={() => navigation.popToTop()}
            />
        </View>
    )
}
