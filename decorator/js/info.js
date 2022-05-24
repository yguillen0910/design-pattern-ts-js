class ClientComponent {
    constructor(url) {
        this.url = url;
    }

    async getData() {
        const response = await fetch(this.url);
        const data = await response.json();
        return data;
    }
}

class ClientDecorator {
    constructor(clientComponent) {
        this.clientComponent = clientComponent;
    }

    async getData() {
        return await this.clientComponent.getData();
    }
}

//decorator 1
class UpperCaseClientDecorator extends ClientDecorator {
    async getData() {
        const data = await super.getData();
        const newData = data.map(item => {
            item.title = item.title.toUpperCase();
            return item;
        });
        return newData
    }
}

//decorator 2
class HTMLClientDecorator extends ClientDecorator {
    async getData() {
        const data = await super.getData();
        const newData = data.map(item => {
            item.title = `<h1>${item.title}</h1>`;
            item.thumbnail = `<img src="${item.thumbnail}" />`;
            return item;
        });
        return newData;
    }
}

(async () => {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    const clientComponent = new ClientComponent(url);
    const data = await clientComponent.getData();
    console.log(data);

    const upperClient = new UpperCaseClientDecorator(clientComponent);
    const upperData = await upperClient.getData();
    console.log(upperData);

    const htmlClient = new HTMLClientDecorator(upperClient);
    const htmlData = await htmlClient.getData();
    divContent1.innerHTML = htmlData.reduce((ac, item) => {
        return ac + `<div>
            ${item.title}
            ${item.thumbnail}
        </div>`;
    });

    const htmlClient2 = new HTMLClientDecorator(clientComponent);
    const htmlData2 = await htmlClient2.getData();
    divContent2.innerHTML = htmlData2.reduce((ac, item) => {
        return ac + `<div>
            ${item.title}
            ${item.thumbnail}
        </div>`;
    });
})();