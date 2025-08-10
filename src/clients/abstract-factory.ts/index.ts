import { Factory } from "../../abstract-factory-pattern/ProductFactory.ts";
import { GUIFactory, MacOsFactory, WindowsFactory } from "../../abstract-factory-pattern/RenderUI.ts";


export const productFactory = () => {
    const factory = new Factory();

    const productA = factory.createProductA();
    console.log(productA.operationA());

    const productB = factory.createProductB();
    console.log(productB.combinedOperation(productA));
    console.log(productB.operationB())
}

export const triggerRenderUI = () => {
    function renderUI(factory: GUIFactory) {
        const button = factory.createButton();
        const checkbox = factory.createCheckbox(button);

        button.render();
        checkbox.render();

        button.onClick(() => {
            console.log("Button Clicked");
        });
        checkbox.toggle();
    }

    renderUI(new WindowsFactory());
    renderUI(new MacOsFactory());
}