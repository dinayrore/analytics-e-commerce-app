# ADR 013: Using React Native Toast Messages

3 March 2023

## Context

`react-native-toast-message` is a light weight, customizable package that creates an animated toast message component for React Native applications. It is well supported and commonly used in the React Native community.  


## Decision

We will use `react-native-toast-message` for providing users with error messages as application errors occur.
We will use Navi the fairy from The Legend of Zelda: Ocarina of Time as our toast message speaker - Hey Listen!
We will present toast messages from the bottom of the screen to avoid a known package issue (details below).

## Status

Accepted

## Consequences

In the Zelda community, Navi can be seen as a bit of an annoyance due to her frequency of callouts. It may also be true that with repeat toast messages our application Navi may become an annoyance as well. 

The package `react-native-toast-message` has a known issue in the render view area of a toast message that appears from the top of a screen - [issue reported on Github](https://github.com/calintamas/react-native-toast-message/issues/437). In order to avoid this issue, we are showing all toast messages from the bottom of the screen rather than the top. If a user experience concern is raised and a need to render our toast messages from the top arises, a patch can be implemented with the [`patch-package`](https://www.npmjs.com/package/patch-package).