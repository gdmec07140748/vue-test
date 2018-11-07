<template>
<div>
<div class="static"
     v-bind:class="{ 'active': isActive, 'text-danger': hasError }">
     dd
</div>
<div v-bind:class="classObject">22</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      hasError: false,
      classObject: {
        active: true,
        "text-danger": false
      }
    };
  },
  components: {}
};
</script>

<style>
</style>


