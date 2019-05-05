# eMerge Hackathon 2019

Just got back from the hackathon. I'm exhausted, but wanted to quickly copy a few snippets of code from the project today I found interesting. Might reuse somewhere else sometime.

### Appropriating Inquirer.js' `when` pattern

Seen here in `showable` instead.

```js
<script>
  export default {
    data() {
      return {
        activeStep: 'categories',
        selected: [],
        steps: [
          {
            name: 'categories',
            label: 'Travel Preference',
            showable: data => true,
          },
          {
            name: 'activities',
            label: 'What\'s Your Vibe?',
            showable: data => {
              return data.categories.indexOf('entertainment') > -1
            },
          },
          {
            name: 'flavors',
            label: 'Pick Your Flavor',
            showable: data => {
              return data.categories.indexOf('food') > -1
            },
          },
          {
            name: 'music',
            label: 'Music Preference',
            showable: data => {
              return data.categories.indexOf('entertainment') > -1
            },
          },
        ],
        questionnaire: {
          categories: [],
          activities: [],
          flavors: [],
          music: [],
        },
      }
    },
    computed: {
      getActiveStep() {
        return this.steps.filter(step => step.name === this.activeStep)[0]
      },
      nextable() {
        return this.selected.length > 0
      },
    },
  }
</script>
```

### Pattern for tracking items in a list

```pug
<template lang="pug">
  ...
  v-list-tile-action
    v-icon(
      @click="fave(local)"
      :color="faved(local.name) ? 'red' : 'grey'"
    ) favorite
</template>
```

```js
<script>
  export default {
    data() {
      return {
        faves: [],
      }
    },
    methods: {
      fave(local) {
        const index = this.faves.indexOf(local.name)

        if (this.faved(local.name))
          this.faves.splice(index, 1)
        else
          this.faves.push(local.name)
      },
      faved(name) {
        return this.faves.indexOf(name) > -1
      },
  ...
```

### Pattern for returning list of people with matching lists of properties

Comes from comparing form data, to user attributes.

```js
  getters: {
    results(state) {
       const specialtyList = specs => {
         return Object.entries(specs)
           .filter(([key, val]) => val.length > 0)
           .flatMap(([key, val]) => {
             return val.map(v => {
               return `${key};${v}`
             })
           })
       }

       const locals = state.locals
         .map(local => {
           const specs = specialtyList(local.specialties)

           return {
             ...local,
             specs,
           }
         })

       const prefs = specialtyList(state.questionnaire)

       const results = _sortBy(
         locals,
         [l => _intersection(prefs, l.specs).length]
       )

       return results.reverse()
    },
  },
```
