import { Expense, ExpenseProp, IExpense } from "entities/Expense"

export class ExpenseUsecase {
  constructor(public expenseRepository: IExpense) {}

  CreateExpense(prop: ExpenseProp): Expense {
    return this.expenseRepository.Create(new Expense(prop))
  }

  DeleteExpense(id: string): void {
    this.expenseRepository.Remove(id)
  }

  IndexExpense(): Expense[] {
    return this.expenseRepository.Index()
  }
}
