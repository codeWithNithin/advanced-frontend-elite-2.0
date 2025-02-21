// class -> blue print of the real world entity
class Product {
  // these are all properties, technically, its called data members
  // To make a property private, we use # before the property
  #name;
  #price;
  #category;
  #description;
  #rating;

  //very special member function of every class
  constructor(name, price, category, description, rating) {
    // here this referes to the empty object that is created when new keyword is called.
    this.#name = name;
    this.#price = price;
    this.#category = category;
    this.#description = description;
    this.#rating = rating;
    console.log('constructor called');
    // if constructor returns non-primitive value, then that manually returned object will be assigned to called variable
    //if no return statement or if primitive values are returned, then value of this keyword will be assigned to called variable
  }

  // To make the sure that users can set and get the value of the data members, we write getter and setter methods. these getter setter mthods will also help us to validate the values so that no one can allocate random values to our data members.
  set setProductName(name) {
    this.#name = name;
  }

  get getProductName() {
    return this.#name;
  }

  set setProductPrice(price) {
    if (price > 0) this.#price = price;
    else console.log('invalid price');
  }

  get getProductPrice() {
    return this.#price;
  }

  set setProductCategory(price) {
    this.#price = price;
  }

  get getProductCategory() {
    return this.#category;
  }

  // These are all methods, technically, its called member functions
  addProduct() {
    console.log('product added to cart');
  }

  displayProduct() {
    console.log('display products here...');
    console.log(this.#name, this.#price, this.#category, this.#description);
  }

  buyProduct() {
    console.log('display products here...');
  }
}

const p1 = new Product(
  'laptop',
  1000,
  'electronics',
  'laptop with 8gb ram',
  4.5
);

p1.displayProduct();

// Related to this keyword...
// In most of the cases, this refers to call site
// What is a call site? call site means it can be an object, function, or class.

let obj = {
  x: 10,
  y: 20,
  fn: function () {
    // here this refers to obj, since that obj is the one which trigered the fn function.
    console.log(this.x, this.y);
    const print = function () {
      console.log(this.x, this.y);
    };
    print();
  },
};

obj.fn();
