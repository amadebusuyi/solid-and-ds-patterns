/** Abstraction is a fundamental OOP concept and it is the process of simplyfying complex systems
    by breaking them down into smaller, more manageable components. It involves hiding complex details
    of the system and exposing only the essential features to the user. This ensures that developers
    only focus on the functionality of a component without being concerned about the underlying
    complexity, making code easier to understand, maintain & extend.
**/

interface Shape {
    area: () => void;
    perimeter: () => void;
}

export class Rectangle implements Shape {
    constructor(private length: number, private breadth: number) {};
    area(): void {
        console.log(`The area of the rectangle is: ${this.length * this.breadth}`);
    }
    perimeter(): void{
        console.log(`The perimeter of the rectangle is: ${2 * (this.length + this.breadth)}`);
    };
}

export class Circle implements Shape {
    constructor(private radius: number) {};
    area(): void {
        console.log(`The area of the circle is: ${Math.PI * this.radius * this.radius}`);
    }
    perimeter(): void {
        console.log(`The perimeter of the circle is: ${2 * Math.PI * this.radius}`);
    }
}

export const calculateArea = (shape: Shape) => {
    shape.area();
};

export const calculatePerimeter = (shape: Shape) => {
    shape.perimeter();
};

export default {
    calculateArea,
    calculatePerimeter,
    Rectangle,
    Circle,
};

// Export calculateArea and calculatePerimeter
