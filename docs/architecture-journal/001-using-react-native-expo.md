# ADR 001: Using React Native Expo

17 February 2023

## Context

We are building out our React Native practice. As such, we are discovering our process for building out React Native applications, including what projects may be best suited for React Native VS. React Native Expo. In discovering the possibilities, Alicia Midland (Analytics & Optimization) and Kristine Horn (Engineering) have come together with an example project idea for a simple e-commerce app that implements analytics tools that are supported for React Native with Expo.

## Decision

- We will have one example project for implementing analytics using supported SDKs for React Native, including: Amplitude, Adobe Analytics, GA4, and Mixpanel.
- We will be creating our React Native application using Expo (bare workflow) as Expo only adds to the feature sets available to React Native and can easily be removed should a vanilla React Native example be needed.
- We will need to use Expo (bare workflow) in order to include all of the necessary analytics tools, therefore, our ios and android native directories will be exposed as well as Expo packages in `package.json`.

## Status

Accepted

## Consequences

As the decision was made to use Expo, we will be locked into Expo SDK supported packages, including a version or two behind the latest React Native release. In using Expo's bare workflow, it is simple enough to convert the project from using Expo CLI to React Native CLI, should an example vanilla React Native application be preferred at any time.
