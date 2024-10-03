# ADR 005: Hide Project Secrets

22 February 2023

## Context

Our project includes three API_KEYS for the following technologies: Amplitude, Mixpanel, and Adobe Analytics. It is important to follow the guidelines mentioned for hiding application secrets as they are provided by each tool. Application secrets are kept secret for the overall security of our application and services. Additional documentation regarding how to hide project secrets for React Native Expo apps.

## Decision

We will use 1Password to store project secrets.
We will use `.env` to hide our application secrets. This file is located in the root directory of our project and is git ignored. This file will never be committed to the repo.
We will use `dotenv` and `expo-config` to share application secrets with native code.
We will use `babel-plugin-transform-inline-environment-variables` to transform inline environment variables for the native applications to understand and use.

## Status

Accepted

## Consequences

If application secrets are ever committed to a git repository, use the following guideline provided on Github - [Removing sensitive data from a repository](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository). It is important to note that while application secrets can be made unreachable, this method does not prevent application secrets from being compromised.

The `babel-plugin-transform-inline-environment-variables` module does not obfuscate or encrypt secrets for packaging.
