# ADR 002: Using TypeScript

17 February 2023

## Context

The majority of our web projects I have worked on are written in TypeScript. TypeScript extends JavaScript and improves the developer experience by adding type safety to our code. With type safety we can avoid JS coercion, thus avoiding situations like [The Square Hole](https://www.youtube.com/watch?v=7haqnQvrYfI).

## Decision

We will be using TypeScript for the React Native Expo application.
We will also have other native programming languages included in this repo as we are working with a React Native Expo bare workflow, however, the majority of the code will use TypeScript.

## Status

Accepted.

## Consequences

TypeScript will provide type safety and prevent coercion. Sometimes, TypeScript errors can be a bit cryptic. It is not a difficult language to learn, however it takes time and practice to understand what an error message intends to be fixed.
