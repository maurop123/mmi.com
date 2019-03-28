# Tracker With Airtable

![screenshot of airtable tracker today](/imgs/airtable-tracker-today.jpg)

I've been trying to track stuff for a long time. Since 2014 I've tried most popular products, Trello being my favorite so far, and even prototyped my own app a bunch of time, but wasn't satisfied. Then I heard about Airtable.

I started using Airtable two months ago for tracking a meditation habit I started building. Airtable offers a friendly UI to put in data into a spreadsheet. That may not sound like much, so I'll just get into what I've been doing with it.

## Track anything

![screenshot of first airtable tracker](/imgs/first-airtable-tracker.jpg)

"When" was a datetime field. In early version it was the first field so I would always get the most accurate time. Also to make sure I never accidentally skipped it, since in Airtable the first field mandatory field and can never be deleted.

The "What" field is a simple dropdown of action words used to describe the "What" in the question, "What happened?" The second and third fields, "How" and "Details" were multi-select fields to allow specifying more of what happened. Lastly, "Notes" was a multi-line text field for more long-winded descriptions of the event being tracked.

Finally there was also "Qty" and "Unit". These were for providing quantitative data separate from the Notes for easier parsing. Across many versions, these are still the main fields use in the tracker.

![screenshot of airtable tracker today on desktop](/imgs/airtable-tracker-today-desktop.jpg)

The current version leads with a single "What" text field, making it easier to get to the point. The same format of "action" and then "detail" is followed without having to separate them into different fields, resulting in fewer clicks and faster tracking.

The idea is that the first word should be a simple action, followed by a single simple detail. Anything extra goes into "Notes". It's easy to parse the action out from the details since it is a single word that essentially describes a category. This is how I made Category Views in Airtable to see my different datasets.

![airtable views](/imgs/airtable-views.jpg)

## Play with your data

After you've got your data, have some fun with it! Airtable offers an API with good documentation for pulling your data into your app. Here's something simple I made to visually track my meditation habit.

![meditation heatmap](/imgs/meditation-streak.jpg)
