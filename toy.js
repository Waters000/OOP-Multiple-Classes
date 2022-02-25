// constructor - 3 arguments creates a new toy...will be used a bunch
class Toy {
  constructor(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
  }
}
/// new toys are part of toy constructor with new
const toys = [
  new Toy('Action Figure', 14.99, 5),
  new Toy('Rare Toy', 17.99, 1)
];

module.exports = {
  Toy,
  toys
};
