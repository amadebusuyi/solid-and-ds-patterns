interface Button {
  render(): void;
  onClick(f: Function): void;
}

interface Checkbox {
  render(): void;
  toggle(): void;
}

export interface GUIFactory {
  createButton(): Button;
  createCheckbox(button: Button): Checkbox;
}

class WindowsButton implements Button {
  public render(): void {
    console.log("Render a button in Windows Style");
  }
  public onClick(f: Function): void {
    console.log("Windows button was clicked");
    f();
  }
}

class WindowsCheckbox implements Checkbox {
  constructor(private button: Button) {}

  public render(): void {
    console.log("Render a checkbox in Windows Style");
  }

  toggle(): void {
    this.button.onClick(() => {
      console.log("Windows checkbox toggled");
    });
  }
}

class MacOSButton implements Button {
  public render(): void {
    console.log("Render a button in MacOS Style");
  }
  public onClick(f: Function): void {
    console.log("MacOS button was clicked");
    f();
  }
}

class MacOSCheckbox implements Checkbox {
  constructor(private button: Button) {}

  public render(): void {
    console.log("Render a checkbox in MacOS Style");
  }

  toggle(): void {
    this.button.onClick(() => {
      console.log("MacOS checkbox toggled");
    });
  }
}

export class WindowsFactory implements GUIFactory {
  public createButton(): Button {
    return new WindowsButton();
  }
  public createCheckbox(button: Button): Checkbox {
    return new WindowsCheckbox(button);
  }
}

export class MacOsFactory implements GUIFactory {
  public createButton(): Button {
    return new MacOSButton();
  }
  public createCheckbox(button: Button): Checkbox {
    return new MacOSCheckbox(button);
  }
}

// AbstractProductX - interface for a type of product (e.g., Button)
// AbstractProductY - interface for another type of product (e.g., Checkbox)
// ProductAX / ProductAY - concrete products for variant A
// ProductBX / ProductBY - concrete products for variant B
// AbstractFactory - interface for creating related objects without specifying concrete classes
// ConcreteFactoryA - creates products of variant A
// ConcreteFactoryB - creates products of variant B
// Client - uses factories and products via abstract interfaces, unaware of concrete classes

/**
*****Abstract Factory Pattern Components******
 * 1. AbstractProductX - interface for the first type of product
 * 2. AbstractProductY - interface for the second type of product
 * 3. ConcreteProductAX / ConcreteProductAY - variant A products
 * 4. AbstractFactory - defines methods to create each kind of related product
 * 5. ConcreteFactoryA - produces a family of products for variant A
 * 6. ConcreteFactoryB - produces a family of products for variant B
 * 7. ConcreteProductBX / ConcreteProductBY - variant B products
 * 8. Client - works with abstract factories and products, avoiding direct dependencies on concrete classes
**/

/**
*****Use Cases******
 * 1. Cross-platform UI toolkits (e.g., MacOS vs Windows widgets)
 * 2. Theming systems (e.g., Light theme vs Dark theme components)
 * 3. Families of related game objects (e.g., medieval vs sci-fi units)
 * 4. Database connectors (e.g., MySQL vs PostgreSQL)
 * 5. Product lines in e-commerce platforms (e.g., Standard vs Premium variants)
**/

