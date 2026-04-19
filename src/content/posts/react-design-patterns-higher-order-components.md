---
title: React design patterns - Higher Order Components
pubDate: '2024-06-15 18:58:18'
updatedDate: '2024-06-15 18:58:18'
description: What is a Higher Order Component (HOC) HOCs are a React design pattern
  for sharing abstracted logic and behavior. A HOC is a function that takes a component,
draft: false
slug: react-design-patterns-higher-order-components
author: jonathanmeaney
tags:
- javascript
- reactjs
- web-development
- design patterns
- react
---
### What is a Higher Order Component (HOC)

- HOCs are a React design pattern for sharing abstracted logic and behavior.
- A HOC is a function that takes a component, wraps it with new functionality and returns the newly wrapped component.

### Benefits

- Code Reusability
  - Avoid duplication and keep your code DRY by abstracting common functionality into HOCs.
- Composition
  - HOCs can be easily chained together to compose a component with multiple functionalities.
- Conditional rendering
  - HOCs are great for conditional rendering. Rendering the supplied component under certain conditions e.g. if authenticated or admin.
- Prop manipulation
  - A HOC can manipulate props before passing them to the wrapped component. Useful for adding additional props or updating existing ones.

### Caveats

- Wrapper hell
  - Excessive use of HOCs can lead to wrapper hell where a component is wrapped in multiple layers of HOCs. This can make the component harder to test and debug.
- Prop collision
  - A HOC that injects props into the supplied component could unintentionally overwrite an existing prop.
- Do you need a custom Hook instead?
  - Can your HOC functionality be expressed as a Hook?
  - Sharing functionality used within a component? create a custom Hook.
  - Sharing functionality used outside a component? create a HOC.

### Anatomy of a HOC

- A function that takes a component as an argument (can specify others too depending on HOC).
- HOC naming generally starts with `with`. E.g. `withStyles`, `withAuthentication`, `withLogging`, `withSomeFeature`.
- A new functional component is created and returned from the function along with the new behavior.

```jsx
// Function name starts with with.
// Accepts a Component parameter.
const withSomeFeature = (Component) => {
  // Return new functional component. props
  // are intended for the wrapped component.
  return (props) => {
    const additionalProps = {
      propOne: true,
    };

    return <Component {...props} {...additionalProps} />;
  };
};
```

### Using a HOC

```jsx
// Component to adapt
import Textbox from "carbon-react/lib/components/textbox";

// withStyles HOC to apply styles to a supplied component
import withStyles from "./hocs/withStyles";

// Call withStyles with the component
// to adapt as an argument.
// The new wrapped component is returned.
// Give it a name and render as normal.
const StyledTextbox = withStyles(Textbox);

// Render instance of StyledTextbox
<StyledTextbox />;
```

> If you need to use the newly wrapped component in multiple places export it from a shared location.

### Examples

[Live demo](https://codesandbox.io/p/sandbox/demo-dlkg97?file=%2Fsrc%2FApp.js)
[Prop manipulation examples](https://codesandbox.io/p/sandbox/gallant-clarke-l3q7zd?file=%2Fsrc%2FApp.js)
[Conditional rendering example](https://codesandbox.io/p/sandbox/brave-johnson-l6n7t2?file=%2Fsrc%2FApp.js)
