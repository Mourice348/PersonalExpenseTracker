import { createContext, useState } from 'react';

export const ExpenseContext = createContext();

export function ExpenseProvider({ children }) {
  const [walletAmount, setWalletAmount] = useState(1200); // number, not string
  const [categories, setCategories] = useState([
    { id: '2', name: 'Food', amount: 10 },
    { id: '3', name: 'Transport', amount: 5 },
    { id: '4', name: 'Entertainment', amount: 20 },
    { id: '5', name: 'Others', amount: 5 },
  ]);

  const addExpense = (categoryName, amountToAdd) => {
    setCategories(prev =>
      prev.map(cat =>
        cat.name === categoryName
          ? { ...cat, amount: Number(cat.amount) + amountToAdd }
          : cat
      )
    );
    setWalletAmount(prev => Number(prev) - amountToAdd);
  };

  return (
    <ExpenseContext.Provider value={{ walletAmount, categories, addExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
}