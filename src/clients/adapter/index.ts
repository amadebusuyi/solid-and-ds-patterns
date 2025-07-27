import { DatabaseAdapter, PostgreSQLDatabase } from '../../adapter-pattern/databaseAdapter.ts';
import { Square, SquareToRectangleAdapter } from '../../adapter-pattern/squareToRectangle.ts';

export const adaptSquareToRectangle = () => {
    let square = new Square(5);
    let adapter = new SquareToRectangleAdapter(square);
    
    console.log(`Height of adapted square`, adapter.getHeight());
    console.log(`Width of adapted square`, adapter.getWidth());
    console.log(`Area of adapted square`, adapter.area());
    console.log(adapter);
}

export const adaptDatabase = () => {
    let database = new DatabaseAdapter(new PostgreSQLDatabase());
    database.connectToMySQL("postgresql://localhost:5432/mydb");
    database.executeMySQLQuery("SELECT * FROM * users");
}