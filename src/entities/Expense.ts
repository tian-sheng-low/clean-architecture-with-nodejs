export type ExpenseProp = {
  id?: string,
  amount: number,
  date: Date,
  name: string,
}

export class Expense {
  private id: string | undefined
  private amount: number
  private date: Date
  private name: string

  constructor({amount, date, name}: ExpenseProp) {
    this.amount = amount
    this.date = date
    this.name = name
  }

  setId(id: string): void {
    this.id = id
  }

  getDate(): Date {
    return this.date
  }
}

export interface IExpense {
  Create(expense: Expense): Expense
  Remove(id: string): void
  Read(id: string): Expense
  Update(id: string, expense: Expense): Expense
  Index(): Expense[]
}
