
// define class using class declaration
class Store {
  // initializes object created with class
  constructor(name, stock) {
    this.name = name;
    this.stock = stock;
    this.revenue = 0;
  }
// method that holds functionality need to process product sales within store
  processProductSale(name) {
    this.stock.forEach(item => {
      if (item.name === name) {
        if (item.count > 0) {
          item.count--;
          this.revenue += item.price;
          console.log(`Purchased ${item.name} for ${item.price}`);
        } else {
          console.log(`Sorry, ${item.name} is out of stock!`);
        }
      }
    });
  }
// method to replenish stock
  replenishStock(name, count) {
    this.stock.forEach(item => {
      if (item.name === name) {
        item.count += count;
        console.log(`Replenished ${item.name} by ${item.count}`);
      }
    });
  }
  // method logs revenue
  printRevenue() {
    console.log(`The revenue so far is ${this.revenue}`);
  }
  // method to welcome to store
  welcome() {
    console.log(`Welcome to ${this.name}!`);
  }
}

module.exports = Store;
