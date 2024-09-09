import React, { useState, useEffect } from 'react'
import { Image, StyleSheet, Platform, Button, Pressable } from 'react-native';
import { Link, router } from 'expo-router';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { PlantList } from '@/components/PlantList';

import { getPlants } from '@/database/firestore'

export default function HomeScreen() {
  const [plants, setPlants] = useState<any>()

  const getPlantsData = async () => {
    const result = await getPlants()
    setPlants(result)
  }

  useEffect(() => {
    getPlantsData()
  }, [])
  useEffect(() => {
    console.log(plants)
  }, [plants])

  router.replace('/signup');

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/garden-ilustration.jpg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={[styles.titleContainer, { marginBottom: 22 }]}>
        <ThemedText type="title">Bem vindos!</ThemedText>
        <HelloWave />
      </ThemedView>

      {/* lista de plantas */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Plantas</ThemedText>
      </ThemedView>

      <ThemedView>
        <PlantList />
      </ThemedView>

      <Link href={'/cad_plant'} style={styles.addPlantButton}>
        <ThemedText>Adicionar +</ThemedText>
      </Link>

      {/* lista de dispositivos */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Sensores</ThemedText>
      </ThemedView>

      <ThemedView>
        <PlantList />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: '100%',
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  addPlantButton: {
    width: 230,
    marginHorizontal: 'auto',
    color: '#eee',
    textAlign: 'center',
    backgroundColor: '#252829',
    borderRadius: 7,
    padding: 12,
  }
});
