<template>
 <div id="example">
        <p>Original message: "{{ message }}"</p>
        <p>Computed reversed message: "{{ reversedMessage }}"</p>
    </div>
</template>

<script>
export default {
  el: "#demo",
  data() {
    return {
      firstName: "Foo",
      lastName: "Bar"
    }
  },
  computed: {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
};
</script>

<style>
</style>
