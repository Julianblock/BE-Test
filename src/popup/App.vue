<template>
  <div>
    <link href="https://fonts.googleapis.com/css?family=Nunito&amp;display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <Popup />
  </div>
</template>

<script>
import Popup from './Popup.vue'

export default {
  name: 'App',
  components: { Popup }
}
</script>

<style scoped>
html {
  margin-top: 10px;
  font-family: 'Nunito',sans-serif;
}
</style>