import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useContext, useLayoutEffect } from 'react';
import { ExpenseContext } from '../contexts/ExpenseContext';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const { walletAmount, categories } = useContext(ExpenseContext);
  const navigation = useNavigation();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigation.replace('Login');
      })
      .catch((error) => {
        console.log(error.message);
        alert('Logout Failed');
      });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handleLogout} style={{ marginRight: 16 }}>
          <Ionicons name="log-out-outline" size={28} color="#FF6347" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* User Info */}
      <View style={styles.userInfo}>
        <Text style={styles.userName}>Welcome, Lin Htet Aung</Text>
        <Text style={styles.userId}>ID: 6631503065</Text>
      </View>

      {/* In Wallet Section */}
      <View style={styles.walletCard}>
        <Text style={styles.walletTitle}>In Wallet</Text>
        <Text style={styles.walletAmount}>${walletAmount}</Text>
      </View>

      {/* Expense Overview Section */}
      <View style={styles.headerRow}>
        <Text style={styles.header}>Expense Overview</Text>
        <Text style={styles.date}>28.4.2025</Text>
      </View>

      {/* Expense Cards */}
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardAmount}>${item.amount}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7FF',
    padding: 16,
  },
  userInfo: {
    marginBottom: 16,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00274D',
  },
  userId: {
    fontSize: 14,
    color: '#7FB3D5',
    marginTop: 4,
  },
  walletCard: {
    backgroundColor: '#ffffff',
    padding: 24,
    borderRadius: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 5,
    alignItems: 'center',
  },
  walletTitle: {
    fontSize: 18,
    color: '#00274D',
    marginBottom: 6,
  },
  walletAmount: {
    fontSize: 28,
    color: '#00BFFF',
    fontWeight: 'bold',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00274D',
  },
  date: {
    fontSize: 14,
    color: '#7FB3D5',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    color: '#00274D',
  },
  cardAmount: {
    fontSize: 16,
    color: '#00BFFF',
    marginTop: 8,
  },
});