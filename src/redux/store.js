import { createStore } from 'redux'

export let store = null

export default (rootReducer) => {
  if(!store)
    store = createStore(rootReducer)

  return store
}
