import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function LoginScreen() {
  const { id } = useLocalSearchParams()

  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <ThemedView style={styles.container}>
				<ThemedText type="link">
					plantID {id ? id : 'nao encontrado' }
				</ThemedText>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    inputText: {
      borderWidth: 1,
      borderColor: '#333',
      padding: 8,
      width: '90%',
      height: 48,
      color: '#fff',
      fontSize: 14,
      marginBottom: 15,
    },
    submitButton: {
      width: 120,
      backgroundColor: '#7FC6A4',
      color: '#fff',
      borderRadius: 7,
      padding: 8,
    },
    link: {
        marginTop: 15,
        paddingVertical: 15,
    },
});
