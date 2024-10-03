# ADR 022: Using React Navigation Bottom Tabs for A/B Testing

11 May 2023

## Context

React Navigation is a standalone library with several peer dependencies that is recommended by the React Native community as the solution for navigation in React Native applications. React Navigation Bottom Tabs is one of many navigation options. This tool will provide our current application the ability to view the same content in two different views.

## Decision

We will use `@react-navigation/bottom-tabs` as a means for switching between views for the products screen.

## Status

Accepted

## Consequences

React Navigation tools are well documented and the recommended tool for supporting navigation flows in React Native applications.

With the inclusion of bottom tabs there may be some slight adjustments to our navigator, however all previous standards will remain.