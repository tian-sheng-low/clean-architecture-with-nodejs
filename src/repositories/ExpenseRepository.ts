import { Expense, IExpense } from "entities/Expense"
import { InMemoryDB } from "frameworks/database/in_memory_db"

export class ExpenseRepository implements IExpense {
  private modelName = 'expense'
  private db: InMemoryDB

  constructor(db: InMemoryDB) {
    this.db = db
  }

  Create(expense: Expense): Expense {
    const [saved, id] = this.db.AddRecord<Expense>(expense, this.modelName)
    saved.setId(id)
    return saved
  }

  Remove(id: string): void {
    this.db.RemoveRecord(id, this.modelName)
  }

  Read(id: string): Expense {
    return this.db.ReadRecord<Expense>(id, this.modelName)
  }

  Update(id: string, expense: Expense): Expense {
    return this.db.UpdateRecord<Expense>(expense, id, this.modelName)
  }

  Index(): Expense[] {
    return this.db.AllRecord<Expense>(this.modelName)
  }
}
