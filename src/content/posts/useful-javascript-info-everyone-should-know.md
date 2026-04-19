---
title: Useful Javascript Info everyone should know
pubDate: '2024-06-15 15:55:34'
updatedDate: '2024-06-15 15:56:37'
description: Template literals ES6 introduced template literals which are similar
  to strings only surrounded with backticks instead of quotes. They allow embedded
draft: false
slug: useful-javascript-info-everyone-should-know
author: jonathanmeaney
tags:
- beginner
- coding
- javascript
- programming
- web-development
---
### Template literals

ES6 introduced [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) which are similar to strings only surrounded with backticks instead of quotes. They allow embedded expressions within.

Use `${}` to interpolate expressions or values into a string.

```javascript
const name = 'Jonathan';
const greeting = `Hello ${name}`;
const dontDoThis = 'Hello' + ' ' + name;

console.log(greeting);
> Hello Jonathan
console.log(dontDoThis);
> Hello Jonathan
```

### [Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)

> JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.

This allows standard functions to be called before they are declared.

It also allows variables to be referenced before they are declared, this however can lead to unexpected errors.

### Variables

### var, let and const differences

```javascript
var
```

- declarations are global or functionally scoped
- variables can be updated and re-declared
- can be declared and not initialized
- hoisted with default initialization (undefined)

```javascript
let
```

- declarations are block scoped
- variables can be updated but **not** re-declared
- can be declared and not initialized
- hoisted with **no** default initialization. Throws ReferenceError

```javascript
const
```

- declarations are block scoped
- variables can **not** be updated and can **not** be re-declared
- must be initialized during declaration
- hoisted with **no** default initialization. Throws ReferenceError

### General guidelines

- Don’t use `var`. `let` and `const` are better.
- Always default to using `const`.
- Use `let` when you want to be able to re-assign the variable.

### Functions

### Differences between function declaration syntax

```javascript
const functionOne = function() {
  // Some code
};
```

`functionOne` is a **function expression** and will only be defined when that line of code is reached. Function expressions are **not** hoisted.

```javascript
function functionTwo() {
  // Some code
}
```

`functionTwo` is a **function declaration** and is defined and hoisted as soon as the surrounding function or script is executed.

**Function expression**

```javascript
// Uncaught ReferenceError: functionOne is not defined
functionOne();

const functionOne = function() {
  console.log("Hello world!");
};
```

**Function declaration**

```javascript
// Prints "Hello world!"
functionTwo();

function functionTwo() {
  console.log("Hello world!");
}
```

### Arrow functions

Arrow functions are a feature introduced as part of ES6. They are more concise syntax for writing function expressions.

```javascript
// ES5
const sum = function(x, y) {
  return x + y;
};

// ES6
// {} not required if only 1 expression:
const sum = (x, y) => x + y;

// If there is only 1 argument then the
// parentheses  are not needed either:
const square = x => x * x;
```

### Differences between Arrow functions and Standard functions

#### Arguments binding

When using a standard function you have access to the `arguments` object.

```javascript
// Standard function
const printArguments = function(){
  console.log(arguments);
};

printArguments(1,2,3,4);
// Prints arguments
> Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]
```

When using an arrow function you do not have access to the `arguments` object.

```javascript
// Arrow function
const printArguments = () => console.log(arguments);

printArguments(1,2,3,4)
// Raises error
> Uncaught ReferenceError: arguments is not defined
  at printArguments (:1:42)
  at :1:1
```

#### Use of `this`

In standard functions `this` represents the object that called the function.

Arrow functions do not bind their own `this`. They inherit it from the nearest non arrow parent. This means in an arrow function `this` will represent the object that defined the arrow function.

In the example below you can see that the standard function `this` can access the `name` property but the arrow function cannot.

```javascript
const Greeter = {
  name: 'Jonathan',
  greetArrow: () => {
    console.log(`Hello ${this.name}`);
  },
  greetStandard() {
    console.log(`Hello ${this.name}`);
  }
};

Greeter.greetArrow();
Greeter.greetStandard();

// Prints
Hello
Hello Jonathan
```

In `greetArrow` function `this` refers to the `Window` object

In `greetStandard` function `this` refers to the `Greeter` object

#### Binding

Standard functions are suitable for the **bind** method.

```javascript
// E.G in a React class component
constructor(props) {
  this.handleIncrement = this.handleIncrement.bind(this);
}

handleIncrement() {
  this.setState({ count: this.state.count + 1 });
}
```

Arrow functions are not suitable for binding.

### Destructuring assignment

### Arrays

[Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) syntax lets you assign multiple values from an array to variables in index order in one go.

```javascript
const [a, b] = [1, 2, 3, 4, 5];

console.log(a);
> 1
console.log(b);
> 2
```

You can also use the spread syntax `...` to assign any extra values to a `rest` variable.

```javascript
const [a, b, ...rest] = [1, 2, 3, 4, 5];

console.log(a);
> 1
console.log(b);
> 2
console.log(rest);
> [3, 4, 5]
```

### Objects

Destructuring assignment syntax lets you assign multiple key values from an object to variables in one go.

```javascript
const {a, b} = {a: 1, b: 2, c: 3, d: 4, e: 5};

console.log(a);
> 1
console.log(b);
> 2
```

You can also use the spread syntax `...` to assign any extra key value pairs to a variable to a `rest` variable.

```javascript
const {a, b, ...rest} = {a: 1, b: 2, c: 3, d: 4, e: 5};

console.log(a);
> 1
console.log(b);
> 2
console.log(rest);
> {c: 3, d: 4, e: 5}
```

You can assign default values to destructured variables that may be undefined in the destructuring object.

```javascript
const {a, b, x = 20} = {a: 1, b: 2, c: 3, d: 4, e: 5};

console.log(a);
> 1
console.log(b);
> 2
console.log(x);
> 20
```

#### Destructuring assignment and renaming

You can destructure assign and rename the variable. Useful for when there may be duplicate variable names or just to improve code readability.

```javascript
const {a: otherA, b: otherB} = {a: 1, b: 2, c: 3, d: 4, e: 5};

console.log(otherA);
> 1
console.log(otherB);
> 2
```

#### Destructuring assignment, renaming and defaults

You can assign a default value to renamed variables

```javascript
const {
  business_data: businessData = {}
} = payload;
```
