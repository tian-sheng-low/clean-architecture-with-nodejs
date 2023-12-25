import { InMemoryDB } from "frameworks/database/in_memory_db"
import { HTTPServer } from "frameworks/server/HTTPServer"
import { ExpenseRepository } from "repositories/ExpenseRepository"
import { Router } from "routes/Router"
import { ExpenseUsecase } from "usecases/expense_usecase/ExpenseUsecase"

// Dependency Injection, this can be done autonomously with DI tools
const db = new InMemoryDB()
const expenseRepository = new ExpenseRepository(db)
const expenseUsecase = new ExpenseUsecase(expenseRepository)
const router = new Router(expenseUsecase)
const httpServer = new HTTPServer(router)

httpServer.start()
