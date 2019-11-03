class MenuGenerator {
    constructor(type, elements) {
        this.type = type;
        this.elements = elements;
    }

    getType() {
        console.log(this.type);
    }
    showItems() {
        console.log(elements);
    } 
}

class HorizontalMenuGenerator extends MenuGenerator {
    //TODO:
}

class VerticalMenuGenerator extends MenuGenerator {
    animate() {
        console.log(`Animacja menu typu: vertical`)
    }
}

let hMenuGenetator = new HorizontalMenuGenerator("horizontal", ['start', 'about']);
let vMenuGenetator = new VerticalMenuGenerator("vertical", ['home', 'contact']);