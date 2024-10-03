# Checkout

As a user I want to be able to go through a checkout process so that I may buy the items I am interested in purchasing.

AC: 
- create checkout.screen.tsx ✅
- create checkout.styles.ts ✅
    - use application themes ✅

Analytics:
 - An event is created when the user views the checkout screen: Purchase ✅
 
Dependencies:
    [Spec Sheet](https://docs.google.com/spreadsheets/d/1XjU3QFf_wD4_UEoyGYmgohfrjzf7GZBR1wWtNOyYD_Q/)

Feature Status:
GA4 Complete ✅
Amplitude Complete ✅
Mixpanel Complete ✅
Adobe Analytics - Pending

V2:
Currently, when a user navigates to the checkout screen:
- there is an animation indicating a success
- we would like to add real checkout functionality... [Stripe](https://stripe.com/docs/payments) maybe?