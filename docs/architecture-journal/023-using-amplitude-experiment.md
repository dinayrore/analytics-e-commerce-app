# ADR 023: Architecture Decision Record Template

27 June 2023

## Context

Amplitude is a regularly utilized product analytics platform by our clients. In June 2021, they released a new experimentation platform for digital optimization that integrates with their product analytics tool. The product analytics team has a nascent A/B Testing and Experimentation practice, but historically we've implemented experiments through Google Optimize, which has a sunset date of September 2023, so the product analytics team is seeking other platforms for experimentation and A/B testing to skill up on and recommend to clients if appropriate.

## Decision

We will integrate Amplitude Experiment to experiment with its capabilities to the extent that we are able to with limited traffic on the React Native app.

## Status

Accepted

## Consequences

We do not have much experience using Amplitude Experiment, though we are proficient in Amplitude's analytics platform. The integration is experimental. We will start off with one experiment and adjust accordingly. Adding a new tool adds to project dependencies. Amplitude Experiment provides clients the opportunity for fewer contracts with greater functionality. Amplitude Experiment has a lot of great, intuitive documentation.
