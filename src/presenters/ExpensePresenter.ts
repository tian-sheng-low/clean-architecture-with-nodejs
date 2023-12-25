import { Expense } from "entities/Expense"

export const expensePresenter = (expense: Expense) => {
  return {
    ...expense,
    date: expense.getDate().toISOString(),
  }
}

export const expensesPresenter = (expenses: Expense[]) => {
  return expenses.map(expense => {
    return expensePresenter(expense)
  })
}
