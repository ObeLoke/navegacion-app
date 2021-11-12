import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/appTheme';

export const SettingsScreen = () => {

    const { top } = useSafeAreaInsets();

    return (
        // <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{
            ...styles.globalMargin,
            marginTop: top + 20
        }}>
            <Text style={styles.title}>
                Settings Screen
            </Text>
        </View>
    )
}
