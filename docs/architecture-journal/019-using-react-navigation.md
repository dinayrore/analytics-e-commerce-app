# ADR 019: Using React Navigation

30 March 2023

## Context

React Navigation is a standalone library with several peer dependencies that is recommended by the React Native community as the solution for navigation in React Native applications. While [React Navigation](https://reactnavigation.org/docs/getting-started/) is well documented, we are building out our React Native practice, and as such understanding some of the more nuanced behavior behind React Navigation would be beneficial to document for our learning tool.

## Decision

We will use `@react-navigation/native` as our navigation provider.
We will use `@react-navigation/drawer` to build out a menu drawer component.
We will use `@react-navigation/native-stack` to manage screens that depend on one another (in a stack).
We will use navigation types and pass the navigation prop through screens and components as documented in [Access the navigation prop from any component](https://reactnavigation.org/docs/connecting-navigation-prop)
We will only use the useNavigation hook in providers and header icons.

## Status

Accepted

## Consequences

React Navigation is well documented and the recommended tool for supporting navigation flows in React Native applications.
In defining our use of React Navigation via passing down props rather than using the useNavigation hook, we will need to create strong types and support the use of these props throughout our application. Hooks will not need to use the useNavigation hook to pass navigation to a screen as the screen will have access to the navigation types it needs through the navigation provider.
