interface Component {
    getDetail(): string;
}

class ProductComponentTS implements Component {
    protected _name: string;

    constructor(name: string) {
        this._name = name;
    }

    getDetail(): string {
        return `Product: ${this._name}`;
    }
}

abstract class ProductDecoratorTS implements Component {
    protected component: Component;

    constructor(component: Component) {
        this.component = component;
    }

    getDetail(): string {
        return this.component.getDetail();
    }
}

class CommercialInfoProductDecoratorTS extends ProductDecoratorTS {

    private tradename: string;
    private brand: string;
    constructor(component: Component, tradename: string, brand: string) {
        super(component);
        this.tradename = tradename;
        this.brand = brand;
    }

    getDetail(): string {
        return `${super.getDetail()} - ${this.tradename} - ${this.brand}`;
    }
}

class PriceProductDecoratorTS extends ProductDecoratorTS {
    private price: number;
    constructor(component: Component, price: number) {
        super(component);
        this.price = price;
    }

    getDetail(): string {
        return `${super.getDetail()} - ${this.price}`;
    }
}

class HTMLProductDecoratorTS extends ProductDecoratorTS {
    getDetail(): string {
        return `<div>${super.getDetail()}</div>`;
    }
}

const productComponentTS = new ProductComponentTS('Beer');
console.log(productComponentTS.getDetail());

const commercialInfoProductTS = new CommercialInfoProductDecoratorTS(productComponentTS, 'Budweiser', 'Bud');
console.log(commercialInfoProductTS.getDetail());

const priceProductTS = new PriceProductDecoratorTS(commercialInfoProductTS, 2.5);
console.log(priceProductTS.getDetail());

const priceProductTS2 = new PriceProductDecoratorTS(productComponentTS, 2.5);
console.log(priceProductTS2.getDetail());

const htmlProductTS = new HTMLProductDecoratorTS(priceProductTS2);
console.log(htmlProductTS.getDetail());