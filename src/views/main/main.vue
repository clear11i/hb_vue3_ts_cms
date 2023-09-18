<template>
  <div class="main">
    <h2>main</h2>
    <div>
      <h2>{{ counter }}</h2>
      <h2>{{ doubleCounter }}</h2>
      <button @click="changeCounter">changeCounter</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import useCounterStore from '@/store/counter'
import { storeToRefs } from 'pinia'

const { counter, doubleCounter } = storeToRefs(useCounterStore())
const { changeCounterAction } = useCounterStore()

function changeCounter() {
  changeCounterAction(300)
}
</script>

<style lang="less" scoped>
.main {
  color: red;
}
</style>
