# ADR 004: Unit Testing with Jest and React Native Testing Library

22 February 2023

## Context

We are building out our React Native practice. As such, we have determined [Jest](https://jestjs.io/) and the [React Native Testing Library](https://callstack.github.io/react-native-testing-library/) are most suitable for unit testing React Native applications.

## Decision

- We will be using Jest, and React Native Testing Library for unit testing and component level testing.
- We will be using the following patterns when unit testing:

  - describe <Component />
  - it ('renders text when...',

- We will use `getByTestId` sparingly - for images or other elements that cannot be accessed via any other React Native Testing Library queries.

## Status

Accepted

## Consequences

Now that we have established a unit testing pattern, we will need to keep up with and continue to follow the agreed upon pattern.
