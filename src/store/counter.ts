import { defineStore } from 'pinia'

const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 100
  }),
  getters: {
    doubleCounter(state) {
      return state.counter * 2
    }
  },
  actions: {
    changeCounterAction(newCounter: number) {
      console.log(newCounter)

      this.counter = this.counter + newCounter
    }
  }
})

export default useCounterStore
