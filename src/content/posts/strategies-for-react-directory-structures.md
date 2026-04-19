---
title: Strategies for react directory structures
pubDate: '2024-06-15 19:03:45'
updatedDate: '2024-06-15 19:03:45'
description: 'React Directory Structure There are several strategies when talking
  about structuring the codebase of a React application. Two common ones are: Group
  by file'
draft: false
slug: strategies-for-react-directory-structures
author: jonathanmeaney
tags:
- directory-structure
- javascript
- programming
- structure
- technology
- react
---
## React Directory Structure

There are [several strategies](https://legacy.reactjs.org/docs/faq-structure.html) when talking about structuring the codebase of a React application. Two common ones are:

1. Group by file type (our current strategy)
2. Group by feature

### Group by File Type

This type of structure groups files based on their type and function. For example, all components are grouped together, all Flux-related files (actions, stores, constants) are grouped together, all views, utils, Hooks etc. etc. are grouped together. This is the current strategy we employ in the codebase.

This structure is useful for small application because its simple but it becomes less useful as the application grows.

### Group by File Type: Pros

**Simplicity:** Grouping by file type is simple and the organization of files is intuitive. Every directory has a specific purpose and its apparent to the developer where to find a file type or where to add a new one.

**Consistency:** Grouping by file type gives the application consistency because new files of a certain type will always go in the same directories.

### Group by File Type: Cons

**Scalability:** When the application grows the group by file type structure becomes less manageable because each directory will have an ever growing number of entries making it difficult to find specific files.

**Lack of Context:** As this structure doesn’t group together related files its harder to understand how different parts of the application relate to one another. There is no context associated with the files.

**Refactoring and Testing Difficulty:** With the files spread out among multiple directories when needing to refactor it will need changes in various directories across the application. Also because the files are separated into different directories it complicates the testing process as maybe it doesn’t make sense to test each file individually. Testing a feature as a whole is a better approach.

### Group by Feature

This type of structure groups files by feature or domain. For example, a feature would have all related files (components, Hooks, context, actions, stores, etc.) bundled together under one feature directory separated into sub directories when needed. The aim of this structure is to keep related code together. This also emphasizes **separation of concerns**. Group by feature is suited to larger projects

### Group by Feature: Pros

**Cohesion:** In terms of group by feature cohesion means related code is grouped together. This makes it easier to understand the feature and to maintain it.

**Easier Refactoring and Testing:** With the files groups together under a feature it is much easier to refactor. It is also much easier to test as well because the feature can be tested as a whole.

**Scalability:** When the application grows adding new features is a simple process. You just follow the existing pattern. Adding new features won’t add any additional complexity to other features allowing the application to scale better.

### Group by Features: Cons

**Complexity:** This structure can be more complex than grouping by file type, especially for smaller applications.

**Inconsistent File Locations:** Depending on how your features are defined it might not be immediately clear where to put new files. One example of this is a component that is used by multiple features, where should its file be placed?

**Feature Definition:** Determining what constitutes a **“feature”** can be subjective.

**Possibility of Large Directories:** It’s possible that a feature could become very large with a complex directory structure. To mitigate this large features can be refactored into smaller **sub-features**.

### Summary

Grouping by features can provide benefits in terms of cohesion, context, testing, and scalability that can make it an effective choice for many React applications.

We don’t need to be strict and have one strategy or another. I think a hybrid approach of **“group by file type”** and **“group by feature”** might be the best approach.

For generic featureless components and utilities maintain **“group by file type”** for those. Anything specifically feature related **“group by feature”**.

Eventually we may naturally evolve into **“group by route”** structure as more and more of the application is Carbonized. We will group several features by the route they are mounted on.

###### Potential hybrid group by file and feature structure

```
src
├── __spec_helper__
├── components
│   ├── common-component-group
│   │   └── common-component-one
│   ├── common-component-two
│   └── common-component-three
├── context
├── dispatcher
├── docs
├── features
│   ├── feature-one
│   │   ├── sub-feature-one
│   │   └── sub-feature-two
│   ├── feature-two
│   │   ├── components
│   │   ├── contexts
│   │   ├── hooks
│   │   ├── actions
│   │   ├── stores
│   │   ├── utils
│   │   └── constants
│   └── feature-three
├── hooks
│   ├── common-hook-one
│   └── common-hook-two
├── images
├── registries
├── services
├── style
├── utils
│   ├── common-util-one
│   ├── common-util-two
│   └── common-util-three
└── views
```

##### Example of feature currently in codebase

```
src/features/
└── pay-run-corrections
    ├── __snapshots__
    ├── components
    │   ├── calculation-status-errors-accordion
    │   ├── cancel-dialog
    │   ├── corrections-status-pod
    │   ├── save-dialog
    │   ├── summary-corrections-status-pod-container
    │   └── validation-dialog
    ├── hooks
    │   ├── usePayEventBatchSave
    │   └── useSubmitBatchCorrections
    └── pay-run-corrections.js
```
