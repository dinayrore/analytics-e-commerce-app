# ADR 008: Using Husky Commit Hooks

22 February 2023

## Context

The use of pre-commit hooks is a common practice. The automated checks help to ensure code quality before code can be permitted to push to a remote repository.

## Decision

- We will be [husky](https://typicode.github.io/husky/#/) for pre-push hooks.
- We will run `yarn lint` and `yarn test` within our pre-push hooks.
- We will only use the Git options `-n` or `--no-verify` to bypass the pre-push hook if a WIP commit / branch needs to be added to the remote source for review.

## Status

Accepted

## Consequences

Any time someone uses the Git options `-n` or `--no-verify` to bypass the pre-push hook we risk the quality of our code. Only WIP commits and branches in need of review should use this bypass. All other commits must run through the code quality checks within the pre-commit hook.
