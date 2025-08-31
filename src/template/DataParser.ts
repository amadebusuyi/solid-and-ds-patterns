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

export class JSONParser extends DataParser {
  protected parse(data: any): void {
    console.log("Parsing data as JSON");
    // JSON.parse(data);
    return data;
  }
}

export class XMLParser extends DataParser {
  protected parse(data: any): void {
    console.log("Parsing data as XML");
    return data;
  }
}