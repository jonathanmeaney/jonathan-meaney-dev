---
title: Introduction to User-Centric UI Testing with React Testing Library
pubDate: '2024-06-15 19:19:30'
updatedDate: '2024-06-16 12:37:08'
description: The React Testing Library, part of the @testing-library family, facilitates
  user-centric UI component testing. It emphasizes queries, event handling, user interaction,
  asynchronous actions, and debugging. With clear naming patterns for queries and
  methods like fireEvent and userEvent, it aligns testing with real user behavior.
  The waitFor method is useful for handling asynchronous actions.
draft: false
slug: introduction-to-user-centric-ui-testing-with-react-testing-library
author: jonathanmeaney
tags:
- javascript
- programming
- testing
- testing library
- web-development
- react
---
### [Intro to React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

The `@testing-library` family of packages helps you test UI components in a user-centric way.

The `@testing-library` is the primary testing library suggested by Sage Architects.

> The principle behind the library:
> The more your tests resemble the way your software is used, the more confidence they can give you.

> `Jest` is a testing framework.
> `React Testing Library` is just a library used with Jest to provide new testing functionality similar to `Enzyme`.

### [Querying](https://testing-library.com/docs/queries/about)

- Queries are the methods that Testing Library gives you to find elements on the page.
- `screen` is an object which has access to every query.
- There are 3 different types of query `get`, `find` and `query`.
- Query methods follow a naming pattern of `getBy...`, `findBy...`, `queryBy...` etc. There are also `All` versions of each to find multiple matches.

```javascript
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "./App";

describe("App", () => {
  beforeEach(() => {
    render();
  });

  test("has correct UI", () => {
    // Title is on the page
    expect(screen.getByText(/Title/i)).toBeInTheDocument();

    // The create button is not disabled
    const createButton = screen.getByText("Create");
    expect(createButton).not.toBeDisabled();
  });
});
```

### [Firing Events](https://testing-library.com/docs/dom-testing-library/api-events/)

- Use `fireEvent` to trigger events on elements found with queries.
- `fireEvent` dispatches exactly the events you tell it to and just those - even if those exact events never had been dispatched in a real interaction in a browser.

```javascript
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "./App";

describe("App", () => {
  beforeEach(() => {
    render();
  });

  test("adding a new post", () => {
    // Populate the form inputs
    const textInput = screen.getByLabelText("Title");
    fireEvent.change(textInput, { target: { value: "New Post Title" } });

    // Find and click the create button
    const createButton = screen.getByText("Create");
    fireEvent.click(createButton);

    // Check the post was created and is visible
    expect(screen.getByText(/New Post Title/i)).toBeInTheDocument();
  });
});
```

### [User Events](https://testing-library.com/docs/user-event/intro)

- `userEvent` dispatches the events like they would happen if a user interacted with the document directly.
- Using `userEvent` over `fireEvent` is a better way of testing user interaction with components.
- `userEvent` is imported from a separate package `@testing-library/user-event`

```javascript
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import App from "./App";

describe("App", () => {
  beforeEach(() => {
    render();
  });

  test("adding a new post", async () => {
    // Populate the form inputs
    const textInput = screen.getByLabelText("Title");
    await userEvent.click(textInput);
    await userEvent.type(textInput, "New Great Post Title");

    // Find and click the create button
    const createButton = screen.getByText("Create");
    await userEvent.click(createButton);

    // Check the post was created and is visible
    expect(screen.getByText(/New Great Post Title/i)).toBeInTheDocument();
  });
});
```

### [Waiting for Async Methods](https://testing-library.com/docs/dom-testing-library/api-async#waitfor)

- `waitFor` is a useful async method which will wait for your expectations to pass. Use when you have `async` actions.

```javascript
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "./App";

describe("App", () => {
  beforeEach(() => {
    render();
  });

  test("deleting all posts", async () => {
    // Find and click the clear posts button
    const clearButton = screen.getByText("Clear Posts");
    fireEvent.click(clearButton);

    // Check post is gone after deletion
    await waitFor(() => {
      // Check the posts were destroyed and are not visible
      // Use queryByX methods to determine element does not exist
      expect(screen.queryByText(/Post Title/i)).toBeNull();
      expect(screen.queryByText(/Post Body/i)).toBeNull();
    });
  });
});
```

### [Debugging](https://testing-library.com/docs/dom-testing-library/api-debugging)

- Calling `screen.debug()` will print the HTML for the component. E.G

```jsx
  <div>
    <div class="app">
    ...
    ...
    ...
    </div>
  </div>
```

### Useful Testing Library Links

- [Queries](https://testing-library.com/docs/queries/about) - Methods to find elements on the page.
- [Query within](https://testing-library.com/docs/dom-testing-library/api-within) - How to search for an element within a found element.
- [Firing Events](https://testing-library.com/docs/dom-testing-library/api-events/) - Use the `fireEvent` method to fire different events on elements.
  - [User Events](https://testing-library.com/docs/user-event/intro) - Use the `userEvent` method to fire different events on elements.
- [Async Method](https://testing-library.com/docs/dom-testing-library/api-async) - Methods for dealing with asynchronous code.
  - [waitFor](https://testing-library.com/docs/dom-testing-library/api-async#waitfor) - `waitFor` is a useful async method which will wait for your expectations to pass.
- [Debugging](https://testing-library.com/docs/dom-testing-library/api-debugging)- Some additional debugging options
  - Can still use the `debug()` method
  - `console.log(screen.debug());`
