<template>
<div>
  hh<input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
    <div class="demo-alert-box">
      <strong>Error!</strong>
      <slot></slot>
    </div>
</div>

</template>

<script>
export default {
  props:['value'],
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style>

</style>
