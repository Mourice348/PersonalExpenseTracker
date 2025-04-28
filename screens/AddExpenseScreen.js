import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useState, useContext } from 'react';
import { ExpenseContext } from '../contexts/ExpenseContext';
import { Picker } from '@react-native-picker/picker';

export default function AddExpenseScreen() {
  const { addExpense, categories } = useContext(ExpenseContext);

  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState(categories[0]?.name || '');
  const [note, setNote] = useState('');

  const handleSave = () => {
    if (!amount || !category) {
      Alert.alert('Error', 'Please fill amount and category!');
      return;
    }

    addExpense(category, parseFloat(amount));
    setAmount('');
    setCategory(categories[0]?.name || '');
    setNote('');
    Alert.alert('Success', 'Expense added successfully!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add New Expense</Text>

      <TextInput
        style={styles.input}
        placeholder="Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <View style={styles.dropdown}>
        <Picker
          selectedValue={category}
          onValueChange={(itemValue) => setCategory(itemValue)}
        >
          {categories.map((cat) => (
            <Picker.Item key={cat.id} label={cat.name} value={cat.name} />
          ))}
        </Picker>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Note (optional)"
        value={note}
        onChangeText={setNote}
      />

      <Button title="Save Expense" color="#00BFFF" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7FF',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00274D',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  dropdown: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
  },
});