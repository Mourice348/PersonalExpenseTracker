import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

// Screens
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';
import AddExpenseScreen from '../screens/AddExpenseScreen';
import SummaryScreen from '../screens/SummaryScreen';

// Icons
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const defaultHeaderOptions = {
  headerStyle: { backgroundColor: '#00BFFF' },
  headerTintColor: '#00274D',
  headerTitleAlign: 'center',
};

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
        options={{
          title: 'Home',
          ...defaultHeaderOptions,
        }} 
      />
    </Stack.Navigator>
  );
}

function AddStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="AddExpense" 
        component={AddExpenseScreen} 
        options={{
          title: 'Add Expense',
          ...defaultHeaderOptions,
        }} 
      />
    </Stack.Navigator>
  );
}

function SummaryStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Summary" 
        component={SummaryScreen} 
        options={{
          title: 'Summary',
          ...defaultHeaderOptions,
        }} 
      />
    </Stack.Navigator>
  );
}

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#00BFFF',
        tabBarStyle: { backgroundColor: '#fff' },
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Add" 
        component={AddStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Summary" 
        component={SummaryStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bar-chart-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E0F7FF' }}>
        <ActivityIndicator size="large" color="#00BFFF" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Screen name="Main" component={MainTabNavigator} />
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}