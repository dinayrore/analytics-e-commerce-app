# ADR 009: EAS as a Build Pipeline

2 March 2023

## Context

We are building out our React Native practice. As such, we are discovering which build pipelines work best for our React Native applications, including trying out [EAS](https://expo.dev/eas) - Expo Application Services.

## Decision

- We will be using EAS build pipeline to create iOS and Android builds for our React Native Expo app.

## Status

Accepted

## Consequences

EAS builds provide an easy method to install project applications via scanning QR codes with the Expo Go App. As the decision was made to use EAS for our build pipeline, we will be limited to the amount of builds and build times associated with the "Free Plan".
