// component
class ProductComponent {
    constructor(name) {
        this.name = name;
    }

    getDetail() {
        return `${this.name}`;
    }
}

//decorator

class ProductDecorator {
    constructor(productComponent) {
        this.productComponent = productComponent;
    }

    getDetail() {
        return this.productComponent.getDetail();
    }
}

class CommercialInfoProductDecorator extends ProductDecorator {
    constructor(productComponent, tradename, brand) {
        super(productComponent)
        this.tradename = tradename;
        this.brand = brand;
    }

    getDetail() {
        return `${this.tradename} ${this.brand} ` + super.getDetail();
    }
}

class StoreProductDecorator extends ProductDecorator {
    constructor(productComponent, price) {
        super(productComponent)
        this.price = price;
    }

    getDetail() {
        return `$ ${this.price} ` + super.getDetail();
    }
}

class HTMLProductDecorator extends ProductDecorator {

    getDetail() {
        return `<h1> Información del producto
            <p>${super.getDetail()}</p>
        `;
    }
}

//component
const productComponent = new ProductComponent('Beer');
console.log(productComponent.getDetail());

// decorator 1 whit component
const commercialInfoProduct = new CommercialInfoProductDecorator(productComponent, 'Erdinger', 'Pikantus');
console.log(commercialInfoProduct.getDetail());

const storeProduct = new StoreProductDecorator(productComponent, 2.50);
console.log(storeProduct.getDetail());

const product = new StoreProductDecorator(commercialInfoProduct, 2.50);
console.log(storeProduct.getDetail());

const productHtml = new HTMLProductDecorator(product);
myDiv.innerHTML = productHtml.getDetail();