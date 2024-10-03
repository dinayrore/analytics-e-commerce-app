# ADR 020: Proxying

17 February 2023

## Context

Proxying is a method of monitoring API requests and responses for your application. The two most commonly used proxy tools are Proxyman & Charles.

## Decision

We will be using Proxyman as our project proxying tool. All documentation regarding proxying will be referencing Proxyman docs.

## Status

Accepted.

## Consequences

Proxyman requires a license.
Setting up an Android Emulator to work with Proxyman requires additional setup to be added to the application repo, as documented in [Proxyman's docs](https://docs.proxyman.io/debug-devices/android-device).
Setting up an iOS simulator with Proxyman is easily managed within the app.
Proxyman is well documented.
