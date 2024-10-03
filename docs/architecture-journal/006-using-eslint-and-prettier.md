# ADR 006: Using Eslint and Prettier

22 February 2023

## Context

[ESLint](https://eslint.org/docs/latest/use/getting-started) is a tool for identifying and reporting on patterns found in JavaScript code, with the goal of making application code more consistent by avoiding potential bugs. [Prettier](https://prettier.io/docs/en/index.html) is a code formatter that will conform spacing, quotation, annotation, et cetera, into consistent patterns for every file within the repository.  

If you are using VSCode there are plugins for these tools. See project workspace [extension](../../.vscode/extensions.json) recommendations.

## Decision

We will use eslint and prettier with extended `@react-native-community` linting rules to enforce consistent styling and avoid application errors.

## Status

Accepted.

## Consequences

It is important that everyone utilizes the settings established in our `.prettierrc` file to enforce consistent styles for our application code. Be sure to follow the [Editor Integration](https://prettier.io/docs/en/editors.html) documentation provided by Prettier in order to use the formatter correctly. 

Eslint runs on the pre-push hook and should not be skipped unless the commit or branch needs additional review and is in a work in progress (WIP) state. Pushing commits or branches that have skipped running our linting rules opens up the possibility for our code to have vulnerabilities should it be merged into the main branch. See the following documentation on [Using Husky Commit Hooks](007-using-husky-commit-hooks.md) for more details on pre-push hooks.

