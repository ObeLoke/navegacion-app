import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
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
