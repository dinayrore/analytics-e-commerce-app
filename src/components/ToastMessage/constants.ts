/**
 * @file Toast Message Constants
 * @description text is used in test files and component
 */

export enum ToastMessageHeader {
  heading = "Hey Listen!",
}

export enum ToastMessageText {
  emptyEmail = "Email can't be empty.",
  invalidEmail = "Oops! This email address is invalid.",
  mismatchEmail = "Email mismatch. Please try again.",
  emptyPassword = "Password can't be empty.",
  invalidPassword = "Password must be at least 8 characters long.",
  mismatchPassword = "Password mismatch. Please try again.",
  emptyEmailPassword = "Email and password can't be empty.",
  invalidEmailPassword = "Email and password are invalid.",
  mismatchEmailPassword = "Email and password mismatch. Please try again.",
  emptyName = "Name can't be empty.",
  userNotFound = "User not found. Please register account.",
  genericError = "Something went wrong. Please try again.",
  loginError = "Please login to continue.",
  outOfStock = "This item cannot be found in our inventory.",
  inventoryError = "We are unable to check our inventory at this time.",
}
