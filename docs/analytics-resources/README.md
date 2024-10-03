# Analytics Resources

This project is a cross-disciplinary effort dreamt up by Alicia Midland (Analytics & Optimization Team) and Kristine Horn(Engineering Team).

Detailed installation instructions per each analytic tool can be found in within this directory.

## View Analytic Beacons via Proxy

Build the app as you normally would following the setup & yarn commands detailed in the project README.

Once you have the application running in a simulator or on a physical device, you can use Proxyman or Charles proxy to view analytic beacons sent from the app.

<!-- Add image here and more detail as necessary -->

## Unit Testing Analytics

With the addition of several analytics packages, jest will need mocks added as appropriate to the project repo.

Example: `jest.mock('@adobe/react-native-aepcore');`

We do not need to unit test analytic packages themselves, but we can unit test that the structure of the call we are sending is what we expect. Below is an example unit test for a helper function that sets up a trackState event for Adobe Analytics:

```c
describe('Adobe Analytics functions', () => {
  it('returns a trackEvent with formatted analytics spec data', () => {
    const event = trackStateEvent(
      AdobeAnalyticsPageViewText.home,
      AdobeAnalyticsSectionText.home,
    );

    expect(event).toEqual({
      'tsc.page': AdobeAnalyticsPageViewText.home,
      'tsc.section': AdobeAnalyticsSectionText.home,
    });
  });
});
```

## Implementation Gotchas

- Watch your single quotes vs. double quotes in native files (iOS & Android files).

- Also watch for quotes that may look like single quotes but are actually a different character when copy pasted.
