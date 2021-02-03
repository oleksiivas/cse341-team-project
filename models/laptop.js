const fs = require('fs');
const path = require('path');

const products = [];

module.exports = class Laptop
{
    constructor(name, price) {
        this.name = name;
        this.price = price;

    } 

    save() {
        //products.push(this);
        const p = path.join(path.dirname(process.mainModule.filename), 'jsonFiles', 'laps.json');
        fs.readFile(p, (err, fileContent) => {
            let laptopsData = []; 
            if(!err)
            {
                laptopsData = JSON.parse(fileContent);
            }
            laptopsData.push(this);
            fs.writeFile(p, JSON.stringify(laptopsData), (err) => 
            { console.log(err) });
        });

    }

    static fetchAll(cb) {
        const p = path.join(path.dirname(process.mainModule.filename), 'jsonFiles', 'laps.json');
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                cb([]);
            }
            cb(JSON.parse(fileContent));
        });
        return products;
    }
}