import { Expense } from "entities/Expense"

export const expensePresenter = (expense: Expense) => {
  return {
    ...expense,
    date: expense.getDate().toISOString(),
  }
}
