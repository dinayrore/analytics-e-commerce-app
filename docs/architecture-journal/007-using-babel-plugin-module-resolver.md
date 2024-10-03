# ADR 007: Using Babel Plugin Module Resolver

22 February 2023

## Context

Babel is a JavaScript compiler that React Native applications use to convert React syntax into code that can be run in a JavaScript environment that does not support JavaScript features out of the box. Babel plugins can be used to provide specific features to your application, such as `babel-plugin-module-resolver` simplifies import and require statements within a project to use non-relative paths and improve the readability of file pathways.


## Decision

We will use `babel-plugin-module-resolver` to simplify require and import statements throughout the project repository.  


## Status

Accepted

## Consequences

As with the addition of any project package, application performance should be considered when adding or removing a package. Since this package does not provide any additional services other than resolving module pathways, the concern for performance is not an issue.
