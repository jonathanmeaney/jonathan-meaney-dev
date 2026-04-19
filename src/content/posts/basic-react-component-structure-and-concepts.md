---
title: Basic React Component Structure and Concepts
pubDate: '2018-03-18 15:49:28'
updatedDate: '2018-03-18 16:16:59'
description: This post is just a quick overview of some of the basics of React development,
  shedding light on component basics and some of the technologies and terms used
draft: false
slug: basic-react-component-structure-and-concepts
author: jonathanmeaney
tags:
- babel
- es6
- javascript
- jsx
- render
- transpile
- react
---
This post is just a quick overview of some of the basics of React development, shedding light on component basics and some of the technologies and terms used in React development.
You can think of a React component as a piece of the UI in your application. A User Interface can be broken into small, individual, self contained React components that are assembled together to provide the display and inner workings of a User Interface. React components describe the HTML representation of your application in JavaScript.

## JSX (JavaScript XML)

React components ultimately render HTML that then gets displayed in the browser. The **render()** method of the component defines the structure of this HTML. React builds the application with a  **virtual** version of the**DOM** (Document Object Model. The DOM is the HTML tree structure that makes up a typical web page). **JSX** makes the representation of HTML in a React component more like HTML which should be approachable by most people.

## A Simple React Component

A basic React component has only one method, **render()**, this method is required for any React component. The **render()** method can return HTML elements or other React components. The return content should be wrapped in a wrapping element. The examples below show this.
There are two ways to create React components.

1. Using ES6 classes
2. Using the createClass method

##### Using ES6 Classes

React components that are **ES6 classes** extend the class **React.Component**. The example below shows a simple React component using **ES6 classes**.
https://gist.github.com/jonathanmeaney/f7f173da7e9a34bc557fa7cb3c85e0d5

##### Using the createClass method

This is a version of the previous example but implemented using the **createClass** method. Its much more popular to use **ES6 classes**.
https://gist.github.com/jonathanmeaney/b9d7f2a9f464c9a19f2db2867bdb24ac

## Babel and Transpiling

Babel is a tool that converts your code into a stable and well supported version of JavaScript. It ensures that writing code with with features of JavaScript will work in older browsers. The act of converting the code is called **Transpiling**. Babel understands **JSX** and it is this that converts the **JSX** in our components into plain JavaScript that can be interpreted and executed.

## Rendering A Component

In your application you will have a basic HTML page that will serve as the starting point. Here you can add a HTML element that will be used as the container for your React components. To get the component to render we will use the **ReactDom.render()** method. The structure of the **ReactDom.render()**takes two parameters, the component to render and the element it should be rendered into.

```
ReactDom.render(COMPONENT, LOCATION);
```

The location will usually be an id selector, an element you have defined with an id. The example below shows this rendering the simple component detailed above.
https://gist.github.com/jonathanmeaney/a88d696129edde38d6538f28720f07e1
