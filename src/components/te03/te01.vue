<template>
<div>
<button v-on:click="count++">You clicked me {{ count }} times.</button>
<h3>{{ title }}</h3>
</div>

</template>

<script>
export default {
  props: ['title'],
  data() {
    return {
       count: 0
    }
  },
  components: {

  }
}
</script>

<style>

</style>
