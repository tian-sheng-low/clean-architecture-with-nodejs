import { Hono } from "hono"
import { ExpenseUsecase } from "usecases/expense_usecase/ExpenseUsecase"
import { ExpenseRoute } from "./ExpenseRoutes"

export interface Route {
  buildRoute(): Hono
}

export class Router {
  constructor(
    public expenseUsecase: ExpenseUsecase
  ) {}

  register (app: Hono): void {
    app.route('/expenses', new ExpenseRoute(this.expenseUsecase).buildRoute())
  }
}
