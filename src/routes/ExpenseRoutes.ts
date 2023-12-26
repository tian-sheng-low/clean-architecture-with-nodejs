import { Hono } from "hono"
import { Route } from "./Router"
import { ExpenseUsecase } from "usecases/expense_usecase/ExpenseUsecase"
import { expensePresenter } from "presenters/ExpensePresenter"

export class ExpenseRoute implements Route {
  constructor(
    public expenseUsecase: ExpenseUsecase
  ) {}

  buildRoute(): Hono {
    const app = new Hono()

    app.post('/create', (c): Response => {
      const expense = this.expenseUsecase.CreateExpense({
        amount: 100,
        date: new Date(),
        name: "expense item name"
      })

      const res = expensePresenter(expense)

      return c.json({ expense: res })
    })

    app.get('/', (c): Response => {
      const expenses = this.expenseUsecase.IndexExpense()

      const res = expenses.map(expense => {
        return expensePresenter(expense)
      })

      return c.json({ expenses: res })
    })

    return app
  }
}
