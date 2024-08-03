import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { PlantList } from '@/components/PlantList';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/garden-ilustration.jpg')}
          style={styles.reactLogo}
        />
      }>
        <Link href='/login'>
          <ThemedText>ir para o login</ThemedText>
        </Link>
      <ThemedView style={[styles.titleContainer, { marginBottom: 42 }]}>
        <ThemedText type="title">Bem vindo!</ThemedText>
        <HelloWave />
      </ThemedView>

      {/* lista de plantas */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Plantas</ThemedText>
      </ThemedView>

      <ThemedView>
        <PlantList />
      </ThemedView>


      {/* lista de dispositivos */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Sensores</ThemedText>
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
});
