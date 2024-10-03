# Project Architecture

Outlined below are the common packages and project architecture that will be used for the E-commerce Analytics Sandbox App.

## File Structure

As with most React projects, all of the source material will be keep in a root level folder called `src`. 

```bash
├── assets                  
├── README.md                    
└──src                     
    ├── components                    
    ├── contexts                   
    ├── hooks
    ├── navigation                    
    ├── screens                   
    ├── services
    └── theme
```

### Android and iOS Directories

As with any bare workflow Expo app, the [android](../../android/) and [ios](../../ios/) directories will be exposed and included in our repository. It is within these directories that native code can be written to include SDKs for implementing Analytics. 

### Assets

The fonts, icons, and imagery used in the app will be kept [here](../../assets/).

### Docs

All documentation including architectural decisions and analytic resources, will be kept [here](../../docs/).

### Src

The source folder for all of our React Native Expo application content.

#### Components

The building blocks of our app. Components are reusable and generic, following [ReactJS](https://reactjs.org/docs/components-and-props.html) component best practices and standards. Components that are closely coupled to a React Native screen will be placed in a components directory that is relative to that screen.

For example:

```bash
├── screens                   
    ├── components                    
        └── Header                     
           └── Header.tsx                    
    └── HomeScreen.tsx  
```                

#### Contexts

React Contexts provide a means to pass data through the component tree without having to pass props down manually at every level. Refer to [React Context](https://reactjs.org/docs/context.html) Documentation for more information.

#### Hooks

The new way for managing state without writing a Class. Refer to [React Hooks](https://reactjs.org/docs/hooks-intro.html) Documentation for more details.

#### Navigation

React Native [navigation](https://reactnavigation.org/docs/getting-started/) stacks will be used to route a user from screen to screen.

#### Screens

The main features of our app. Each screen may have it's own set of styles or rely on global styling, which will be referenced by the application [theme](./src/theme/). See [application behavior](../application-behavior/) for a full list of features and related screens.

### Services

Analytic properties, types, and configuration files to integrate the app with all available analytics tools can be referenced here. The data directory will be used to house constants that would typically be served by a backend database but for simplicity we will use local data references only.

### Theme

The projects standardized theme will be referenced in the theme directory. Refer to [React Native Stylesheet](https://reactnative.dev/docs/stylesheet) Documentation for more information on how to apply styles to React Native components.

### Tests

This project uses [jest](https://jestjs.io/) as its unit test runner. It also leverages [react-native-testing-library](https://callstack.github.io/react-native-testing-library/) with extended expects for more thorough unit and component level testing.

