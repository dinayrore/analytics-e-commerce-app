# Authentication

As a user I want to be able to login into my e-commerce app in order to make a purchase.

AC: 
- For now we are opting to use a very simplified Auth. 
    - user provides a password that is 8 characters long ✅
    - user provides a REGEX validated email ✅

- use contexts and hooks to manage user login status within the app ✅
- avoid using packages or auth systems to keep example simple for V1 ✅
- will need uuid and react native get random values for User id ✅
- when user is about to make a purchase user is prompted to Login

- create login.screen.tsx ✅
- create login.styles.ts ✅
    - use application themes ✅
- create registration.screen.tsx ✅
- create registration.styles.ts ✅
    - use application themes ✅

Analytics:
 - An event is created when the user signs up for an account: Sign Up ✅
 - An event is created when the user logs in to the application: Login ✅
 
Dependencies:
    [Spec Sheet](https://docs.google.com/spreadsheets/d/1XjU3QFf_wD4_UEoyGYmgohfrjzf7GZBR1wWtNOyYD_Q/)

Feature Status:
GA4 Complete ✅
Amplitude Complete ✅
Mixpanel Complete ✅
Adobe Analytics - Pending

V2:
- integrate with Firebase Auth? or another preferred Auth system...?