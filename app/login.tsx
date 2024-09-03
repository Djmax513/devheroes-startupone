import React, { useState, useEffect } from 'react'
import { Link, Stack } from 'expo-router';
import { StyleSheet, TextInput, Pressable } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { signUpNewUser } from '@/database/firestore'
import { addPlant } from '@/database/plant'

export default function LoginScreen() {
  const [email, setEmail] = useState<any>()
  const [password, setPassword] = useState<any>()

  const handleSubmit = async () => {
    const userData = await signUpNewUser(email, password)
    console.log(userData)
  }

  return (
    <>
      <Stack.Screen options={{ title: 'Entre no aplicativo' }} />
      <ThemedView style={styles.container}>
          <TextInput
            style={styles.inputText}
            onChangeText={setEmail}
            value={email}
          />
          <TextInput
            style={styles.inputText}
            onChangeText={setPassword}
            value={password}
          />
          <Pressable onPress={handleSubmit} style={styles.submitButton}>
            <ThemedText style={{textAlign: 'center'}}>Enviar</ThemedText>
          </Pressable>
          <Link href="/" style={styles.link}>
            <ThemedText type="link">Go to home screen!</ThemedText>
          </Link>
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
