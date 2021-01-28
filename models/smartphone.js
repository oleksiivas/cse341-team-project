const products = [];

module.exports = class Smartphone {

    constructor(name, price, color){
        this.name = name;
        this.price = price;
        this.color = color;
    }

    save() {
        products.push(this);
    }

    static fetchAll() {
        return products;
    }
}