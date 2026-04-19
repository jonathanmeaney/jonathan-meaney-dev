---
title: 'React Class vs Functional Components: A Complete Comparison'
pubDate: '2024-06-15 16:18:35'
updatedDate: '2024-06-15 18:50:15'
description: 'Class component import React from "react"; class Counter extends React.Component
  { constructor(props) { super(props); this.state = { count: 0 };'
draft: false
slug: react-class-vs-functional-components-a-complete-comparison
author: jonathanmeaney
tags:
- beginner
- class components
- funcitonal components
- javascript
- reactjs
- web development
- web-development
- react
---
### Class component

```jsx
import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  componentDidMount() {
    this.setState({ count: this.state.count + 1 });
  }

  handleIncrement() {
    this.setState({ count: this.state.count + 1 });
  }

  handleDecrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>

        
          Increment
        
        
          Decrement
        
      </div>
    );
  }
}

export default Counter;
```

#### Functional component

```jsx
import { useEffect, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => setCount((currentCount) => currentCount + 1), []);

  const handleIncrement = () => setCount(count + 1);

  const handleDecrement = () => setCount(count - 1);

  return (
    <div>
      <h1>{count}</h1>

      
        Increment
      
      
        Decrement
      
    </div>
  );
};

export default Counter;
```

> NOTE: The declaration could also use standard function syntax. There is no difference between the two\*
>
> `javascript > import { useEffect, useState } from 'react'; > > function Counter() { > ... > ... > ... > }; > > export default Counter; >`

> `this` functions differently for arrow function components and standard function components. Neither is the same `this` available to class components. Don’t use `this` in functional components.

### Comparison

#### Class Component

- A class component requires you to extend from `React.Component` and create a render function which returns something.</td>
- Since the component is a class, other class components can inherit from it.
- It must have the `render()` method
- React lifecycle methods can be used inside class components (for example, componentDidMount).
- Constructors are used to initialise state and bind functions.

```javascript
constructor(props) {
  super(props);
  this.state = {name: ''}
}
```

- You have access to `this`

#### Functional Component

- A functional component is just a plain JavaScript function that accepts props as an argument and returns something.
- A functional component is just a plain JavaScript function so inheritance is not possible.
- There is no render method used in functional components but it must return.
- React lifecycle methods (for example, componentDidMount) cannot be used in functional components. Use hooks.
- Constructors are not used. Hooks can be used for state.

```javascript
const [name, setName]= React.useState('');
```

- You **do not** have access to same `this`

### Destructuring assignment with props

You can use destructuring assignment on objects passed into functions, for example with the `props` object passed into a component.

```jsx
import React, { useEffect } from 'react';

const Component = ({
  foo,
  bar,
  baz
}) => {
  useEffect(() => {
    console.log('foo has changed!');
  }, [foo]); // pass foo into the dependency array

  return <h1>Hello Workshop</h1>;
};
```

### [Hooks](https://reactjs.org/docs/hooks-state.html)

> A Hook is a special function that lets you “hook into” React features. For example, useState is a Hook that lets you add React state to functional components.

I’m just going to cover two of the most used hooks below. There are many more which are useful in different situations. You can also create your own custom hooks too.

### useState

This is the most commonly used hook. It allows you to track state in a functional component.

State generally refers to any data or properties that need to be tracked in your application.

#### Import

To use the hook first import `useState` from the `react` package.

```javascript
import { useState } from "react";
```

> NOTE: Notice the use of destructuring in the import!

#### Initialize

After importing the hook you can initialize the state you need for the component. The `useState` hook accepts a value for initial state and returns an array of values.

The example below demonstates initializing a `count` state in a functional component.

Array destructuring is used to assign the destructured values to local variables for use in the component.

- The first destructured value represents the current state.
- The second destructured value is the function used to update the state.

```javascript
import { useState } from 'react';

const Counter = () => {
  // count has initial state of 0
  const [count, setCount] = useState(0);
};
```

Calling `setCount()` and passing in a new value will update the `count` state value.

### useEffect

This hook allows you to perform side effects in functional components. Popular uses of `useEffect` are fetching data when the component loads and reacting to changing state.

#### Import

To use the hook first import `useEffect` from the `react` package.

```javascript
import { useEffect } from "react";
```

> NOTE: Notice the use of destructuring in the import!

#### Implement

The `useEffect` hook accepts two arguments.

- The first argument is a function that will be executed
- The second argument is a dependency array and is optional

`useEffect` runs after every render so its important to control when it will run. That is where the second argument dependency array comes in to play.

| Dependency value | result |
| --- | --- |
| not supplied | `useEffect` function will run after every component render. |
| [] | `useEffect` function will run only after the first component render. |
| [foo, bar] | `useEffect` function will run after component first renders and after any of the dependency values change. |

The example below demonstrates implementing `useEffect` to run function only after the first render of the component.

```javascript
import { useEffect } from 'react';

const Counter = () => {
  useEffect(() => {
    console.log('component mounted!');
  }, []); // pass empty array to run after first render
};
```

### Important rules about hooks

- Only call hooks at the top level of your React function
- Don’t call hooks inside loops, conditions or nested functions

### Hooks VS Lifecycle functions

#### componentDidMount()

#### Class component

```jsx
import React from 'react';

class Component extends React.Component {
  componentDidMount() {
    console.log('mounted!');
  }

  render() {
    return <h1>Hello Workshop</h1>;
  }
};
```

#### Functional component

```jsx
import React, { useEffect } from 'react';

const Component = () => {
  useEffect(() => {
    console.log('mounted!');
  }, []);  // Empty array to run after first render

  return <h1>Hello Workshop</h1>;
};
```

#### componentDidUpdate()

#### Class component

Run after every update

```jsx
import React from 'react';

class Component extends React.Component {
  componentDidUpdate() {
    console.log('component updated!');
  }

  render() {
    return <h1>Hello Workshop</h1>;
  }
};
```

#### Functional component

Run on every update

```jsx
import React, { useEffect } from 'react';

const Component = () => {
  useEffect(() => {
    console.log('component updated!');
  }); // pass no array to run after every update

  return <h1>Hello Workshop</h1>;
};
```

#### componentDidUpdate() continued

#### Class component

Run only after a specific prop or state updates

```jsx
import React from 'react';

class Component extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.foo !== prevProps.foo) {
      console.log('foo has changed!');
    }
  }

  render() {
    return <h1>Hello Workshop</h1>;
  }
};
```

#### Functional component

Run only after a specific prop or state updates

```jsx
import React, { useEffect } from 'react';

const Component = (props) => {
  useEffect(() => {
    console.log('foo has changed!');
  }, [props.foo]); // pass foo into the array

  return <h1>Hello Workshop</h1>;
};
```

#### componentWillUnmount()

#### Class component

```jsx
import React from 'react';

class Component extends React.Component {
  componentWillUnmount() {
    console.log('component will unmount');
  }

  render() {
    return <h1>Hello Workshop</h1>;
  }
};
```

#### Functional component

```jsx
import React, { useEffect } from 'react';

const Component = () => {
  useEffect(() => {
    // the return statement will fire
    // when the component is unmounting
    return () => {
      console.log('component will unmount');
    }
  }, []);

  return <h1>Hello Workshop</h1>;
};
```

### Tutorial

Please feel free to have a look at my getting started with React functional components tutorial, using Codesandbox.

[Getting Started with Functional Components in Codesandbox](https://jonathan-meaney.dev/2024/06/15/getting-started-with-functional-components-in-codesandbox/)
