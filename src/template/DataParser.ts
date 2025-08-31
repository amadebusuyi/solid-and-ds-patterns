// Abstract Class
export abstract class DataParser {
  public parseData(): void {
    this.loadData();
    const data = "Sample Data";
    const parsedData = this.parse(data);
    this.validate(parsedData);
    this.useData(parsedData);
  }

  protected loadData(): void {
    console.log("Loading Data...");
  }

  protected validate(data: any): void {
    console.log("Validating data....");
  }

  protected useData(data: any): void {
    console.log("Using Data...");
  }

  protected abstract parse(data: any): void;
}

// Concrete Class 1 - JSONParser
export class JSONParser extends DataParser {
  protected parse(data: any): void {
    console.log("Parsing data as JSON");
    // JSON.parse(data);
    return data;
  }
}

// Concrete Class 2 - XMLParser

export class XMLParser extends DataParser {
  protected parse(data: any): void {
    console.log("Parsing data as XML");
    return data;
  }
}

// Abstract Class - e.g. DataParser
// Concrete Class 1 - CSVParser
// Concrete Class 2 - JSONParser
// Client

/**
*****Template Method Pattern Components******
 * 1. Abstract Class - defines the template method (skeleton of algorithm)
 * 2. Concrete Classes - implement the specific steps of the algorithm
 * 3. Client - uses the template method
**/

/**
 *** use cases*****
 * 1. Data Processing (CSV, XML, JSON parsing)
 * 2. Game Development (defining game loops with variations)
 * 3. Report Generation (different formats like PDF, Excel, HTML)
 * 4. Online Payment Processing (steps: validate, charge, confirm)
 * 5. AI Model Training Pipelines (load data, preprocess, train, evaluate)
**/
