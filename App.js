import AppNavigator from './navigation/AppNavigator';
import { ExpenseProvider } from './contexts/ExpenseContext';

export default function App() {
  return (
    <ExpenseProvider>
      <AppNavigator />
    </ExpenseProvider>
  );
}