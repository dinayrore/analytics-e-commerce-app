# ADR 012: Using Lottie Animations

2 March 2023

## Context

Lottie is a library that renders After Effects animations in real time, allowing apps to use animations as easily as static images. `lottie-react-native` is a package specifically made to support React Native's integration of animations for iOS and Android systems. While initially we had approached this project with a keep it simple approach, upon finding a Triforce animation, the integration of Lottie was necessary.


## Decision

We will use Lottie and Lottie Files to enhance the user experience for our E-commerce application.

## Status

Accepted.

## Consequences

As with the addition of any project package, performance is a factor to consider. Lottie animations do not behave quite the same on Android as they do on iOS and performance is a concern if the Lottie file is considerable large. 

