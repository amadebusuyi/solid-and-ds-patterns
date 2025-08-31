import { Rectangle, Shape } from "../../prototype/ShapeProperties.ts";
import { ConcretePrototype } from "../../prototype/UserDetails.ts";

export const triggerUserClone = () => {
    let user1 = new ConcretePrototype({
      name: "John",
      age: 32,
      email: "john@example.com",
    });
    
    let user2 = user1.clone();

    console.log(`user1: ${JSON.stringify(user1)} | user2: ${JSON.stringify(user2)}`);

    if (user1 === user2) {
      console.log("Both instances are the same");
    } else {
      console.log("Cloned objects are separate instances");
    }
}

export const triggerShapeProperties = () => {

    let redRectangle: Shape = new Rectangle(
    {
        color: "red",
        x: 20,
        y: 100,
    },
    10,
    20
    );

    let anotherRectangle: Shape = redRectangle.clone();
    anotherRectangle.properties.color = "blue";

    console.log(redRectangle);
    console.log(anotherRectangle);
}
