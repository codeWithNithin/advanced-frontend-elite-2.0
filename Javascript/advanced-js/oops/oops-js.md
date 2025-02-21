# OOPS in JS

- Objects are very powerful datatypes in JS.
- In software engineering, anything we have can be mapped to a blueprint or a vision.

## introduction to Classes and Objects

- ### **Classes**:

  - A **blueprint** on a set of real world entities. It is just a **vision**. this is not the actual entity. they are going to represent how an entity will look and behave.
  - When i say how do they **look** ? i prefer to say what they posses.
  - When i say how do they **behave** ? i prefer to say what actions can be can be performed in that entity.

  **Lets take an example**

ex: consider a Product class, inside that Product class, what do you think the properties of that product class?.

What is a property?
When i say property, i prefer to say what feature does that product class holds.

ex:

- name : Name of the product class.
- price : Price of the product class
- description : Description of the product class
- ratings: Rating of the product class.
- reviews: Reviews of the product class.
  and more....

So above are the set of properties that the Product class can posses.

**Note: In technical terms, properties are also alled as data members.**

If 2 products are different, then there wil be one property that will have a different value then the other.

What are the actions we can perform on the Product?

- Add product to cart.
- Buy the product.
- Add reviews / Feedbacks to the product.
- Add Ratings to the product.
- Display the product
  and more...

**NOTE : In technical terms, Actions are also alled as Member Functions. Also called as behaviour of a product**

How to make a class in JS ?

- To create a class in JavaScript, we can use class keyword, that can help us create data members as well as member functions in it.

## constructor

- A very special member function of every class.
- Its available in all the classes.

What is so special about constructor?
When we create objects from the class, constructor is the first method that is called automatically.
The default version of constructor is also called as default constructor.

We can change implementation of the default constructor behaviour by creating our own constructor method.

**Note: Class is also a function, as the typeof operator will result in function.**

```JS
class Product {
  constructor() {

  }
}
```

This is the function that gets called by itself.

How can we create object of the class ?

- There is a keyword in JS, called as **new** which can help us create object out of the class.

## How new works ?

Everytime we call new, it does the following 4 things

1. It creates a plain and absolutely empty object.
2. it calls the constructor method and passes the plain object inside the this keyword. so when new is called, this keyword will be automatically accessed by the constructor method and when we call new, then the this keyword has access to the plain object.
3. new does everything need to be done for prototypes to work.
4. if in the constructor method, nothing is returned or primitive values are returned then this keyword will be returned. if non-primitive values are returned, that non-primitive values will be returned.