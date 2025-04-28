import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useContext } from 'react';
import { ExpenseContext } from '../contexts/ExpenseContext';

export default function HomeScreen() {
  const { walletAmount, categories } = useContext(ExpenseContext);

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

      {/* Header Row */}
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
    alignItems: 'flex-start',
  },
  userName: {
    fontSize: 20,
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
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    alignItems: 'center',
  },
  walletTitle: {
    fontSize: 18,
    color: '#00274D',
    marginBottom: 8,
  },
  walletAmount: {
    fontSize: 22,
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
    fontSize: 24,
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
    shadowRadius: 6,
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