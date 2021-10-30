import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';


interface Props extends StackScreenProps<any, any> { };

export const HomeScreen = ({ navigation }: Props) => {

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                Home
            </Text>

            <Button
                title="Ir a About"
                onPress={() => navigation.navigate('AboutScreen')}
            />
        </View>
    )
}
