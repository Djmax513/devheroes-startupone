import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Platform, TextInput, Pressable, ScrollView, Button } from 'react-native';

import { useForm } from 'react-hook-form'

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function CadPlant() {
    const [plantInformation, setPlantInformation] =  useState([{
        careDescription: "<p>teste de descrição</p>",
        deviceId: 12345678,
        growthPlace:"Manter à sombra",
        health: 100,
        imgSrc: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftrexpets.com.br%2Fcomo-comprar-muda-de-suculenta-echeveria-laulensis-&psig=AOvVaw2ObNyQmLMkrrnBOAYlZyys&ust=1723396039556000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCICXx9f06ocDFQAAAAAdAAAAABAE",
        irrigationCycle: 180,
        name:"Suculenta"
    }])

  return (
    <ScrollView>
      <ThemedView>
        <ThemedText>
        </ThemedText>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
});
