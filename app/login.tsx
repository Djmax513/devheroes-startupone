import React, { useState, useEffect } from 'react'
import { router } from 'expo-router'
import { Link, Redirect, Stack } from 'expo-router';
import { StyleSheet, TextInput, Pressable } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { useSession } from '@/ctx';

import { signUpNewUser } from '@/database/firestore'

export default function LoginScreen() {
  const [email, setEmail] = useState<any>('gabrielmacedo95191@gmail.com')
  const [password, setPassword] = useState<any>('Minhasenha123')
  const { signIn } = useSession()

  const createUser = (user: any) => {
    signIn(user)
    router.replace('/');
  }

  const handleSubmit = async () => {
    await signUpNewUser(email, password, createUser)
  }

  return (
    <>
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
