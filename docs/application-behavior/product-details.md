# Product Details

As a user I want to be able to view product details so that I can make a informed decision on my purchase.

AC: 
- depends [Product screen](./products.md) localized data. ✅
- create product-details.screen.tsx ✅
    - use modal view 
    - display full product description ✅
    - display full width image ✅
    - display title wrapped ✅
    - display console, price, and version as ItemDetails ✅
    - buttons stick to the bottom 

- create product-details.styles.ts
    - use application themes ✅

- create reuseable Buttons ✅
    - Buy Now Button ✅
        - navigates to checkout ✅
    - Add to Cart Button ✅
        - navigates to cart ✅

- create an ItemDetail reusable component to list item details ✅
- avoid using packages; keep it simple ✅

Analytics:
- An event is created when the user views the product details screen: Product Details Viewed ✅

- An event is created when a user taps the CTA to Buy Now: Purchase ✅

- An event is created when a user taps the CTA to Add to Cart: Add to Cart ✅
       
- When any action above happens then all event properties are captured. 

Dependencies:
    [Spec Sheet](https://docs.google.com/spreadsheets/d/1XjU3QFf_wD4_UEoyGYmgohfrjzf7GZBR1wWtNOyYD_Q/)

Feature Status:
GA4 Complete ✅
Amplitude Complete ✅
Mixpanel Complete ✅
Adobe Analytics - Pending