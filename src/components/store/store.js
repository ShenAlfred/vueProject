/**
 * Created by shenalfred on 17/2/12.
 */
import Vue from 'Vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      {
        id: 1,
        text: '..1',
        done: false
      },
      {
        id: 2,
        text: '..2',
        done: false
      },
      {
        id: 3,
        text: '..3',
        done: true
      }
    ]
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  getters: {

  }
})

export default store
