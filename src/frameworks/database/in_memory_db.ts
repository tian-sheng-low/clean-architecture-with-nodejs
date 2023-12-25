import { randomUUID } from "crypto"

export class InMemoryDB {
  private document: Record<string, Record<string, unknown>> = {}
  private static instance: InMemoryDB

  constructor() {}

  public static getInstance(): InMemoryDB {
    if(!InMemoryDB.instance) {
      InMemoryDB.instance = new InMemoryDB()
    }

    return InMemoryDB.instance
  }

  public AddRecord<T>(record: T, modelName: string): [T, string] {
    const id = randomUUID()

    if (!this.document[modelName]) {
      this.document[modelName] = {}
    }

    this.document[modelName][id] = record
    return [record, id]
  }

  public RemoveRecord(id: string, modelName: string): void {
    delete this.document[modelName][id]
  }

  public ReadRecord<T>(id: string, modelName: string): T {
    return this.document[modelName][id] as T
  }

  public AllRecord<T>(modelName: string): T[] {
    if (!this.document[modelName]) {
      return []
    }

    return Object.entries(this.document[modelName]).map<T>(([_k, v]) => {
      return v as T
    })
  }

  // For now, this actually perrform upsert because we do not want to go into detail of handling error
  public UpdateRecord<T>(record: T, id: string, modelName: string): T {
    this.document[modelName][id] = record
    return record
  }
}
