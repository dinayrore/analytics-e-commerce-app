# ADR 010: Using Async Storage

2 March 2023

## Context

AsyncStorage was a feature provided within the React Native framework. Since its deprecation, several packages have been recommended for storing unencrypted, persistent, asynchronous, key-value pair data. Most notable is `@react-native-async-storage/async-storage`. 

## Decision

We will use `@react-native-async-storage/async-storage` to store User and Product states for our E-commerce application.

## Status

Accepted

## Consequences

Using AsyncStorage in conjunction with React Contexts should help to keep our application state clean and orderly. AsyncStorage does not persist if the application is closed - a User will need to log in again.

