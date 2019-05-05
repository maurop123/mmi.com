### Universal setters for Vuex using Lodash

```js
export const mutations = {
  set(state, [ attr, value ]) {
    _set(state, attr, value)
  },
  concat(state, [ attr, value ]) {
    const old = _get(state, attr)
      // console.log({ old, attr, value })
    _set(state, attr, [ ...old, ...value ])
  },
}
```
