import { CakeRecipe, ChocolateCake, VanillaCake } from "../../template/Cake.ts";
import { DataParser, JSONParser, XMLParser } from "../../template/DataParser.ts";

export function makeCakes() {
    function bakecake(cake: CakeRecipe) {
      cake.bakeCake();
    }
    console.log("Baking a chocolate cake");
    bakecake(new ChocolateCake());

    console.log("Baking a vanilla cake");
    bakecake(new VanillaCake());
}

export function loadDataParser() {
    function dataParser(dataParser: DataParser) {
        dataParser.parseData();
    }

    console.log("Parsing JSON data");
    dataParser(new JSONParser());

    console.log("Parsing XML data");
    dataParser(new XMLParser());
}