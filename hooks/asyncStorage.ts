import AsyncStorage from '@react-native-async-storage/async-storage'

export async function getAsyncData(key: string) {
    try {
      return await AsyncStorage.getItem('TASKS');
    } catch (error) {
      console.log('Failed to get '+ key +' data', error)
      return null
    }
};

export async function saveAsyncData(key: string, value: any) {
    try {
      return await AsyncStorage.setItem('TASKS', value);
    } catch (error) {
      console.log('Failed to get '+ key +' data', error)
      return null
    }
};