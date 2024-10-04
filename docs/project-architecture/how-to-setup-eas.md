# How to Setup EAS

[EAS](https://docs.expo.dev/build/introduction/) - Expo Application Services - Build is a hosted service for building app binaries for Expo and React Native apps. Follow the [EAS Get Started guide](https://docs.expo.dev/build/setup/) to build your project on EAS cloud systems. You will need an account in order to use EAS.

You may also need to install [Fastlane](https://docs.fastlane.tools/) in order to run EAS build commands. It is recommended to install Fastlane using Homebrew for macOS.

## Android

Follow the instructions to [run a build](https://docs.expo.dev/build/setup/#run-a-build) for Android on EAS.

## iOS

While the Android build steps are simple and straight forward to follow, in order to build a project on EAS for iOS there are a few additional steps you will need to follow that are not documented online.

First, check to see that you have a Apple Developer account.

- If you do not, you will likely need one for building shippable projects and will need to get that set up at this time.
- Contact IT Service Desk for General Support in order to access an Apple Developer account.

Next, ask your ED (Engineering Director) about your Apple Developer account permissions.

- Do you have access to the right signing assets?

If you have all of the above sorted out then you are ready to create a mobile provision for your app. You may need your ED to assist in creating this for you, or any one of the @ios-provisioners in the #ios-provisioning channel on slack.

You are now ready to [run a build](https://docs.expo.dev/build/setup/#run-a-build) for iOS on EAS.

After completing a local build once, the CLI will remember your build preferences and run subsequent builds with the same settings.

### Gotchas

If you drag and drop provisioning profiles, keys, certs, or mobile provisions into the CLI to provide a File Path for any of the build prompts, be sure to remove the quotations and any additional whitespace that may have been added via drag-and-drop or copy/paste.

If you are missing the "Apple Worldwide Developer Relations Certification Authority" follow the steps outlined in this [Github issue comment for Expo](https://github.com/expo/eas-cli/issues/1331#issuecomment-1235603312).

Check to see if you can run the EAS build commands locally BEFORE trying to push builds to EAS cloud.
