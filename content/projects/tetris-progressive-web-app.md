# Tetris Progressive Web App

![tetris app preview](/imgs/tetris-preview.png)

The other night I got inspired to make my very first Progressive Web App game with Vue!

::: warning Disclaimer
I did not make this tetris game! That came from [here](http://binaryify.github.io/vue-tetris/). All I did was take that project and turn it into the progressive web app shown here.
:::


## The Research

Just heard the part of Super Better about how pattern matching games help a lot with ptsd by allowing yo to control your visual mind instead it reflexively recalling the disturbing images.

Last night, I got the chance to try it out. I saw the first episode of Supernatural, which has a grotesque looking ghost in it, and then I tried going to sleep. Well all of a sudden I noticed that I was scared of the dark, and that things face kept popping into my mind, so fuck sleep. Instead I got up and played with the Rubix cube for like 20 mins. I was much more relaxed afterwards, watched 10 minutes of Star Trek, and went to bed easy.

It also helped a couple train to give up smoking before their wedding becaues apparently cravings are in large part visual. You picture yourself indulging and imagine how good you'll feel.

This sounds like using games to train the mind, kinda like meditation. But it's flow, right?

Well that's the gist anyway. Below are some of the details for anyone who's interested.

## Moving Vue 2 projects to Vue 3

Naive way, replace src folder from Vue 2 project to Vue 3 and put stuff in static in public instead. It might work!

## Publish PWA on Github

For PWA to properly work, that is for it to be downloaded to your phone like an app, it needs to have an https url. The extra security helps to keep your phone from being hacked. Publishing your app on Github for free is probably the easiest way to do this.

For that to work you gotta build the project into `/docs` instead of `/dist`, which for vue cli 3 means adding `--dest docs` to the end of the build script in the `package.json` so it looks like this...

And change your baseUrl like it says here...
https://cli.vuejs.org/guide/deployment.html#github-pages

## Make an icon

https://realfavicongenerator.net/

Would be cool to svg it first. make it 260px by 260px or bigger first, and then svg, and then use the above generator.

## Test with Lighthouse

chrome extension

## Might also be interested in...

- https://love2dev.com/blog/pwa-hextris/
