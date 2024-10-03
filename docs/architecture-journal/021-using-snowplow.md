# ADR 021: Architecture Decision Record Template

17 April 2023

## Context

Snowplow is an open source tool that can be used to track and collect behavioral data for applications, which most packaged analytics and experimentation solutions lack - A/B testing, data ownership, cross-platform consistency. A more detailed proposal of the use case for Snowplow can be found [here](https://docs.google.com/document/d/1K3sYBZCJsqTL_NkhXmWWwdrCfgsxAUzFc5IdYx2BhwA/)

## Decision

We will integrate Snowplow to experiment with it's capabilities and provide a proof of concept for it's customized tracking.

## Status

Accepted

## Consequences

Snowplow is a new tool and we do not have much experience using this tool, therefore the integration is entirely experimental. We will be starting off small and building specs as we see fit to benefit our teams.

Adding a new tool adds to our project dependencies.

Snowplow provides our teams with the capability to track data for more custom events (A/B Testing).

Snowplow has a plethora of documentation, though it is a lot to sift through.

Snowplow has types!
