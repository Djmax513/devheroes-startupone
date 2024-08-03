import React, { useState } from 'react'
import { Link, Stack } from 'expo-router';
import { StyleSheet, TextInput, Pressable, Button } from 'react-native';
// import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from 'firebase/auth'

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function LoginScreen() {
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()

  console.log('auth', auth)

  const handleSubmit = () => {
    console.log('login enviado', email, password)

  }

  // const handleSignUp = () => {
  //     createUserWithEmailAndPassword(auth, email, password)
  //         .then(userCredential => {
  //             console.log('User signed up:', userCredential.user)
  //         })
  //         .catch(error => {
  //             console.error('Error signing up:', error)
  //         });
  // };

  // const handleSignIn = () => {
  //     signInWithEmailAndPassword(auth, email, password)
  //         .then(userCredential => {
  //             console.log('User signed in:', userCredential.user);
  //         })
  //         .catch(error => {
  //             console.error('Error signing in:', error);
  //         });
  // };

  // const handleSignOut = () => {
  //     signOut(auth).then(() => {
  //         console.log('User signed out');
  //     }).catch(error => {
  //         console.error('Error signing out:', error);
  //     });
  // };

  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
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

          {/*  */}

          <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
          <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />

          {/* <Button title="Sign Up" onPress={handleSignUp} />
          <Button title="Sign In" onPress={handleSignIn} />
          <Button title="Sign Out" onPress={handleSignOut} /> */}
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
