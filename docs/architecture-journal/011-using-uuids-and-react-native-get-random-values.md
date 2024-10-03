# ADR 011: Using UUIDs and React Native Get Random Values

2 March 2023

## Context

Universally unique identifiers (`uuid`) are used to distinguish objects from one another. The wrapper `react-native-get-random-values` is a dependency for using `uuid` in React Native projects.

## Decision

We will use uuids for User ids in our React Native Expo app.

## Status

Accepted

## Consequences

It is unfortunate that we need to include an additional package in order to get the widely used `uuid` package working for React Native applications, however, this package is widely used, simple, and supported.

