<template>
  <div class="login">
    <h2>login</h2>
  </div>
</template>

<script setup lang="ts">
import Request from '@/service'

Request.get({
  url: '/home/multidata'
}).then(res => {
  console.log(res)
})
</script>

<style lang="less" scoped>
.login {
  color: red;
}
</style>
