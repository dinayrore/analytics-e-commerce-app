# Analytics

The main feature for both React Native applications is Analytics! More documentation on our approach to implementing analytics per each project specifications can be found [here](../analytics-resources/).

Below is an example template for documenting an analytics ticket in JIRA

This story is for capturing when a user opens <event that causes the analytic trigger>

Note:
Important notes to keep in mind (in this case the 1hr wait time)

AC:
    A trackState event is created when the <event that causes the analytic trigger>:
        <event 1>
        <event 2>
        <all the events> (at some point you'd have to break it up if it gets too large!)

    When any action above happens then all properties should be captured for <event name from the spec sheet>
        - <list props that should be created due to the event> (from the spec sheet)

Dependencies:
    Link to spec sheet or individual analytic call(s)
    Link(s) to Designs
    Link(s) to any story dependencies
