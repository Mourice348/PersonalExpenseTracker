import { ExpenseProvider } from './contexts/ExpenseContext';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return (
    <ExpenseProvider>
      <AppNavigator />
    </ExpenseProvider>
  );
}