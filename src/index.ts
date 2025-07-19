// Client code
import { calculateArea, calculatePerimeter, Rectangle, Circle } from "./oop-pillars/abstraction.ts";

const rectangle = new Rectangle(24, 10);
const circle = new Circle(10);
calculateArea(circle);
calculatePerimeter(rectangle);