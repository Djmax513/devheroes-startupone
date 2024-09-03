import Ionicons from '@expo/vector-icons/Ionicons';
import { PropsWithChildren, useState } from 'react';
import { StyleSheet, useColorScheme, TextInput } from 'react-native';
import { useController }  from 'react-hook-form'

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';

export function TextField({ label, name, control, ...inputProps }: any) {
  const theme = useColorScheme() ?? 'light';

  const { field } = useController({
    control,
    defaultValue: '',
    name
  })

  return (
    <ThemedView style={[styles.container]}>
      <ThemedText style={styles.inputLabel}>{label}</ThemedText>
      <TextInput
          style={styles.inputText}
          value={field.value}
          onChangeText={field.onChange}
          {...inputProps}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 20 
  },
  inputText: {
    padding: 12,
    borderRadius: 7,
    borderColor: '#333',
    borderWidth: 1,
    height: 48,
    color: 'white',
    fontSize: 18
  },
  inputLabel: {
    marginBottom: 4
  }
});
