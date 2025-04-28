import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const monthsData = [
  { month: 'January', amount: '$480' },
  { month: 'February', amount: '$400' },
  { month: 'March', amount: '$430' },
  { month: 'April', amount: '$550' },
  { month: 'May', amount: '$700' },
  { month: 'June', amount: '$650' },
  { month: 'July', amount: '$800' },
  { month: 'August', amount: '$450' },
  { month: 'September', amount: '$430' },
  { month: 'October', amount: '$760' },
  { month: 'November', amount: '$700' },
  { month: 'December', amount: '$1000' },
];

export default function SummaryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Monthly Spending</Text>

      {/* Line Chart */}
      <LineChart
        data={{
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{ data: [480, 400, 430, 550, 700, 650, 800, 450, 430, 760, 700, 1000] }],
        }}
        width={Dimensions.get('window').width - 40}
        height={220}
        chartConfig={{
          backgroundColor: '#E0F7FF',
          backgroundGradientFrom: '#E0F7FF',
          backgroundGradientTo: '#E0F7FF',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 43, 91, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 43, 91, ${opacity})`,
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />

      {/* Spending History List */}
      <Text style={styles.historyTitle}>Spending History</Text>
      <FlatList
        data={monthsData}
        keyExtractor={(item) => item.month}
        renderItem={({ item }) => (
          <View style={styles.historyItem}>
            <Text style={styles.historyMonth}>{item.month}</Text>
            <Text style={styles.historyAmount}>{item.amount}</Text>
          </View>
        )}
      />
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
  historyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00274D',
    marginTop: 24,
    marginBottom: 8,
  },
  historyItem: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  historyMonth: {
    fontSize: 16,
    color: '#00274D',
  },
  historyAmount: {
    fontSize: 16,
    color: '#00BFFF',
    fontWeight: 'bold',
  },
});