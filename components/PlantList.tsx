import Ionicons from '@expo/vector-icons/Ionicons';
import { PropsWithChildren, useState } from 'react';
import { StyleSheet, useColorScheme, FlatList, Image } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';

export function PlantList() {
  const theme = useColorScheme() ?? 'light';

  const plants = [
    {
      name: 'Trepadeira',
      imageSrc: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRCfH4C_-47DlZShsL-emeZGYrQmPKeaFypMUMc1L61YYzE9Wm6'
    },
    {
      name: 'Suculenta',
      imageSrc: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRCfH4C_-47DlZShsL-emeZGYrQmPKeaFypMUMc1L61YYzE9Wm6'
    },
    {
      name: 'Costela de Adão',
      imageSrc: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRCfH4C_-47DlZShsL-emeZGYrQmPKeaFypMUMc1L61YYzE9Wm6'
    },
  ]

  const CardItem = ({ card }: any) => {
    return (
      <ThemedView style={[styles.cardWrapper, { backgroundColor: theme === 'light' ? Colors.light.accentBackground : Colors.dark.accentBackground}]}>
        <Image source={{ uri: card.imageSrc}} style={{ height: 80, width: 80, borderRadius: 20 }} />
        <ThemedText style={{ textAlign: 'center' }}>{card.name}</ThemedText>
      </ThemedView>
    )
  }

  return (
    <ThemedView>
      <FlatList
          style={{ flex: 1, gap: 20 }}
          data={plants}
          renderItem={({item}) => <CardItem card={item} />}
          keyExtractor={cardItem => cardItem.name}
          horizontal
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    borderRadius: 12,
    padding: 12,
    display: 'flex',
    flexDirection: 'row',
    width: 230,
    gap: 12,
    marginRight: 12
  }
});
