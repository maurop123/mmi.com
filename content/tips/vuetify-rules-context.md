# Add some context to your Vuetify validation rules

By default, Vuetify passes an array of [pure functions](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976) to the rules attribute of an input. Each function only takes as an argument the value currently in the input.

That's nice and simple, but what if you want include some additional context for your validation rule to consider?

In this post I'll share an easy way to extend your rule set to include some more context.

## A little context

So imagine a form with an input fields for the user's address and also for the user's date of birth.

At first it's enough just to check if the user is over 18 years old, but then comes down new requirements stating that the user must be 19+ years old in Alabama.

Weird? Maybe...

Not wanting to give up Vuetify's sleak system for handling form validation, you might find yourself tinkering around till you come up with something like this...

## The simple trick

**1. Turn the rules array into a function that returns a rules array**

So your rules go from this...

```js
[
  v => !!v || 'Date of Birth is required',
  v => {
    const yearsOld = moment().diff(moment(v, 'MMDDYYYY'), 'years')

    const oldEnough = yearsOld >= 18

    return oldEnough || 'Must be 18+ years old (19+ in AL)'
  }
]
```

...to something like this...

```js
context => ([
  v => !!v || 'Date of Birth is required',
  v => {
    const yearsOld = moment().diff(moment(v, 'MMDDYYYY'), 'years')
    const { state } = context.formData

    const oldEnough = state === 'AL'
      ? yearsOld >= 19
      : yearsOld >= 18

    return oldEnough || 'Must be 18+ years old (19+ in AL)'
  }
])
```

Notice how in the second code snippet, the `context` is used to figure out if the date of birth is valid or not.

**2. Call the function when binding the rules attribute**

```html
<template v-for="field in fields">
  <v-text-field
    v-model="..."
    :rules="field.rules(_data)"
  />
</template>
```

In this example, the `data` portion of the Vue component is being passed as the context for the rules to use.

Also, make sure to actually call the function when binding the attribute. If instead you try `:rules="field.rules"`, then a function will be passed instead of the array of rules that it returns.

And that's it! I hope you liked this trick as much as I enjoyed sharing it. Please share with anyone you think that might get a kick out of it ;-)
