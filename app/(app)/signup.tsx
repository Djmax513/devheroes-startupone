import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Platform, TextInput, Pressable, ScrollView, Button } from 'react-native';

import { useForm } from 'react-hook-form'

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { TextField } from '@/components/TextField';
import ImagePickerExample from '@/components/ImagePicker'

import { addPlant } from '@/database/plant'

export default function CadPlant() {
  const { register, setValue, handleSubmit, control } = useForm()
  const [image, onChangeImage] = useState<any>('');

  useEffect(() => {
    setValue('plantImageSrc', image)
  }, [image])

  const onSubmit = (data: any) => {
    console.log('data', data)
    addPlant(data)
  }

  return (
    <ScrollView>
      <ThemedView>

        <TextField label='Nome' name='name' control={control} />
        <TextField label='Email' name='email' control={control} />
        <TextField label='Senha' name='password' control={control} />
        <TextField label='Descrição' name='plantDescription' control={control} />
        <TextField label='Descrição' name='plantDescription' control={control} />
        <TextField label='Descrição' name='plantDescription' control={control} />

        <Pressable onPress={handleSubmit(onSubmit)} style={styles.submitButton}>
        <ThemedText style={{textAlign: 'center'}}>Enviar</ThemedText>
        </Pressable>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
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
    textAlign: 'center',
    marginVertical: 24,
    marginHorizontal: 'auto',
  },
  link: {
      marginTop: 15,
      paddingVertical: 15,
  },
});
