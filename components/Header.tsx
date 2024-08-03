
import { type ComponentProps } from 'react';
import { Platform, SafeAreaView, StyleSheet, Pressable, Image, useColorScheme } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import { Colors } from '@/constants/Colors';

export function Header({ title }: any) {
    const theme = useColorScheme() ?? 'dark';

    const goToProfilePage = () => {
        console.log('pressionado')
    }

    return (
        <SafeAreaView>
            <ThemedView style={styles.headerWrapper}>
                <ThemedText type='defaultSemiBold'>
                    {title}
                </ThemedText>
                <Pressable onPress={goToProfilePage}>
                    <Ionicons
                        name='person-circle'
                        color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
                        size={40}
                    />
                </Pressable>
            </ThemedView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    headerWrapper: {
        backgroundColor: '#333',
        height: 110,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 28,
        paddingVertical: 22,
        paddingTop: 50,
        gap: 12,
    },
    headerTitle: {
        backgroundColor: 'red'
    }
});
