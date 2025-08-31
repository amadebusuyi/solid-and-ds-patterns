export class MySQLDatabase {
  public connectToMySQL(uri: string): void {
    console.log(`Connecting to MySQL at ${uri}`);
    // implementation
  }

  public executeMySQLQuery(query: string): void {
    console.log(`Executing MySQL Query ${query}`);
  }
}

export class PostgreSQLDatabase {
  public connectToPostgreSQL(uri: string): void {
    console.log(`Connecting to PostgreSQL ${uri}`);
  }

  public executePostgreSQLQuery(query: string): void {
    console.log(`Excuting PostgreSQL query ${query}`);
  }
}

export class DatabaseAdapter {
  constructor(private postgreSQl: PostgreSQLDatabase) {}

  public connectToMySQL(uri: string): void {
    this.postgreSQl.connectToPostgreSQL(uri);
  }

  public executeMySQLQuery(query: string): void {
    this.postgreSQl.executePostgreSQLQuery(query);
  }
}