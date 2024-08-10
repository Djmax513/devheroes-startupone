// UserList.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { db } from './firebaseConfig';  // Importa a configuração do Firebase
import { collection, getDocs } from 'firebase/firestore';
 
const UserList = () => {
  const [usuarios, setUsuarios] = useState([])
  const [loading, setLoading] = useState(true)
 
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'usuarios'));
        const usersList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsuarios(usersList);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users: ', error);
      }
    };
 
    fetchUsers();
  }, []);
 
  if (loading) {
    return <Text>Loading...</Text>;
  }
 
  return (
<View style={styles.container}>
<FlatList
        data={usuarios}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
<View style={styles.userContainer}>
<Text>ID: {item.id}</Text>
<Text>Name: {item.name}</Text>
<Text>Email: {item.email}</Text>
</View>
        )}
      />
</View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  userContainer: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 2,
  },
});
 
export default UserList;