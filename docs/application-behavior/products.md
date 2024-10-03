# Products

As a user I want to be able to view products available to purchase.

AC: 
- use localized data (./services/data/products.ts) ✅
    - use enums & interfaces (./services/data/constants.ts) ✅
        - Products enum ✅
        - Products interface ✅
        - Title enum for Product ✅
        - Image enum for Product ✅
        - Version enum for Product ✅
        - Console enum for Product ✅
        - Description enum for Product ✅

- create products.screen.tsx ✅
    - list of products available ✅
    - pressable product cards ✅
    - display title, price, console, description, & image in card ✅

- create products.styles.ts
    - use application themes ✅

- create and use re-usable card component for product cards ✅
- avoid using packages; keep it simple ✅


Analytics:
 - An event is created when the user views the product screen: Product List Viewed ✅

 - An event is created when a user taps a product in the product list view: Product Tapped ✅
 
 - When any action above happens then all event properties are captured. ✅

Dependencies:
    [Spec Sheet](https://docs.google.com/spreadsheets/d/1XjU3QFf_wD4_UEoyGYmgohfrjzf7GZBR1wWtNOyYD_Q/)

Feature Status:
GA4 Complete ✅
Amplitude Complete ✅
Mixpanel Complete ✅
Adobe Analytics - Pending