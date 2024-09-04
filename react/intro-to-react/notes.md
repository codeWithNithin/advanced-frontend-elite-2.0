# intro to react

- There are so many technologies created using which we can create front-end apps they are:
- Angular, React, Vue, ember.
- sole purpose is to make front-end experience easy.
- We will be learning React
- React is one of the most in demand technology.
- 89% big tech companies, uses React.
- nowerdays, start ups uses React.
- React is at the center of echo system.
- From google trends, we can see that React is most trending.
- there are many ppl learning react, should we learn react? yes.
- why React?
- 1. demand
- 2. easy to getting started.
- single page application - page doesnt get reloaded on route change.
- a single application page will be rendered. for any changes in html, server doesnt download html file. since every single change will be done by javascript untill u pressed refresh icon on website.
- React works on logic of component driven architecture.
- component driven architecture.
- how reusable component are done?
- when any reusable components are done, it will converted to react element.
- Combination of multiple react elements create components.
- React element is a js object that describes the properties of an actual dom node which will be created by react when its finally rendered.
- this js object says, how should an element looks like.

```js
ex:
const reactElement =  {
  type: 'button',
  props: {
  className: 'btn'
  }
  }
```

- React will do this js object behind the scenes.
- we can also create components using React.createElement
- this createElement will return react element.
- again this also gets created internally.

```js
const reactElement = createElement(tagname, {}, 'children');
```

- React is a front-end library.
- since its a library, we need to get this react code.
- we can load react using either CDN and using NPM.

- using react we can do mobile apps, webapps and desktop apps.

- React is a core library.
- ReactDom - browser specific or for browser apps.
- ReactNative - Mobile apps.

## library

- combination of small small functions.

## JSX

- We can write JSX which is a HTML like code, which gets converted to JS. this process is called transpilation.
