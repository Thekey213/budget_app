import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const BudgetCalculator = () => {
  const [income, setIncome] = useState('');
  const [budget, setBudget] = useState({});

  useEffect(() => {
    const calculateBudget = () => {
      const budgetCategories = {
        needs: 0.50,
        wants: 0.30,
        savings: 0.20,
      };

      let calculatedBudget = {};
      for (let category in budgetCategories) {
        calculatedBudget[category] = income * budgetCategories[category];
      }
      setBudget(calculatedBudget);
    };

    if (income !== '') {
      calculateBudget();
    }
  }, [income]);

  return (
    <View style={styles.container}>
      <Text style={styles.resultHeader}>Budget Calculation:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your monthly income"
        onChangeText={(text) => setIncome(text)}
        value={income}
        keyboardType="numeric"
      />
      <View style={styles.resultContainer}>
        {Object.keys(budget).map((category) => (
          <Text key={category} style={styles.resultItem}>
            {category}:  R{budget[category].toFixed(2)}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  resultContainer: {
    marginTop: 20,
  },
  resultHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  resultItem: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default BudgetCalculator;
