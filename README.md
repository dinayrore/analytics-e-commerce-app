# E-commerce Analytics React Native Expo App

A React Native Expo e-commerce analytics sandbox application, using Expos bare workflow. [Expo](https://docs.expo.dev/introduction/expo/) is an open source platform for making universal native apps for Android, iOS and the Web using [TypeScript](https://www.typescriptlang.org/docs/) and [React Native](https://reactnative.dev/docs/getting-started).

Begin by checking out our project [docs](./docs/). This project is a cross-disciplinary effort dreamt up by Alicia Midland (Analytics & Optimization Team) and Kristine Horn (Engineering Team).

Project architecture details can be found [here](./docs/project-architecture/).

If you have a new or innovative idea that could add to the [application behavior](./docs/application-behavior/) be sure to check out the documentation on [how to contribute](./docs/project-architecture/how-to-contribute.md).

We are excited to share in this experience with you as we grow our React Native practice and strengthen our cross-disciplinary efforts with the Analytics and Optimization Team! 🎉

## Getting Started

You will need:

- [Expo CLI](https://docs.expo.dev/workflow/expo-cli/)
- [NodeJS](https://nodejs.org/en/)
- [yarn](https://yarnpkg.com/getting-started)

### Project Dependencies

Refer to [Expo's Installation Guide](https://docs.expo.dev/get-started/installation/) for compatible project dependencies.

### Environment Variables

1Password is the source of truth for all of our project environment variables. The integration of several analytic resources requires the use of a `.env` to be used within the root of our project directory. You will find this projects `.env` in the React Native vault on 1Password.

### Installation

This project uses yarn as it's package manager. DO NOT use npm or you may end up with package version mix-ups and incompatibilities. Run the following command in your terminal to install project dependencies.

```bash
$ yarn
```

### Application Build

React Native Expo supports the development of iOS and Android apps using the following commands:

- Run `yarn android` to open an Android emulator.
- Run `yarn ios` to open an iOS simulator.

#### Application Build Gotchas

In this ejected Expo app, it seems Expo does and does not at times automatically launch Metro after compiling the `.apk` for Android. To resolve this issue, run `yarn start` in a separate terminal after `yarn android`.

## Additional Tooling

This project uses **TypeScript**, **ESLint** and **Prettier** to enhance code quality. Configuration details for each can be found in the [tsconfig.json](./tsconfig.json), `.eslintrc`, `.prettierrc` files respectively.
