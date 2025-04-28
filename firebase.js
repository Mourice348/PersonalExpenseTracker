// firebase.js
import { initializeApp } from 'firebase/app';
import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1SZis2533M0wSpfsTdeSK8wG2oihemhY",
  authDomain: "personalexpensetracker-66ef3.firebaseapp.com",
  projectId: "personalexpensetracker-66ef3",
  storageBucket: "personalexpensetracker-66ef3.appspot.com", // fixed typo
  messagingSenderId: "735881609845",
  appId: "1:735881609845:web:f4cbd87b91137a4582ae3c",
  measurementId: "G-D7E13V6SYS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth with AsyncStorage for persistence
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});