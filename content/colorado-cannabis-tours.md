# Colorado Cannabis Tours

![Hotel Booking Page - Colorado Cannabis Tours](/imgs/cct.png)

[Colorado Cannabis Tours (CCT)](https://coloradocannabistours.com/) is the leading cannabis tour provider in Denver. I worked on this high traffic Wordpress site in the summer of 2016.

We made a hotel booking service on an otherwise static Wordpress site. It was paramount that our development did not create any downtime. That would almost certainly lead to loss of traffic, revenue, and top SEO ranking.
I had tried a few frontend frameworks by that time including, Meteor, Deku, and of course, React. But for one reason or another, none had stuck.

## How I Started With Vue

I first heard about Vue on a Frontend Masters course. The speaker was using it. I googled it and saw this.

![vue homepage](/imgs/vue-homepage.png)

For some reason the idea **Progressive Framework** stood out to me. Then I read,

> Simple, minimal core with an **incrementally adoptable** stack...

That's what I was looking for! A framework that didn't impose itself on your project. This is what we needed.

One of the long term goals of the project was to build out the hotel booking service to become to an app in itself. The idea was then to load a simple Vue app with one page, the hotel booking page, on the Wordpress site. Then we'd be set to build from there till time to separate. That's it!

## Custom Leaflet Map

For the custom map at the top, we used open source project Leaflet. In just one JS file we organized the custom controls and logic, custom neighborhood polygons, and custom listing popups. I highly recommend Leaflet if you're looking for customizability. They also sport a wide selection of map styles, although you may have a hard time finding one that matches Google Maps exactly. Copyrights?

## CCT Today

![CCT expanded](/imgs/cct-today.png)

In less than 3 years, CCT has only expanded, now offering cannabis-friendly hotel booking in California and Las Vegas, too!
