export interface Database {
  connect(): void;
  query(query: string): void;
  close(): void;
}

export class PostgreSQLDatabase implements Database {
  public connect(): void {
    console.log("Connecting to PostgreSql");
  }
  public query(query: string): void {
    console.log(`Executing query: ${query}`);
    // detailed implementation
  }

  public close(): void {
    console.log("Closing connection PostgreSQL");
  }
}

export class MongoDBDatabase implements Database {
  public connect(): void {
    console.log("Connecting to MongoDB");
  }
  public query(query: string): void {
    console.log(`Executing query: ${query}`);
    // detailed implementation
  }

  public close(): void {
    console.log("Closing connection MongoDB");
  }
}

export abstract class DatabaseService {
  constructor(protected database: Database) {}

  abstract fetchData(query: string): void;
}

export class ClientDatabaseService extends DatabaseService {
  public fetchData(query: string): void {
    this.database.connect();
    this.database.query(query);
    this.database.close();
  }
}