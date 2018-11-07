<template>
<div>
<div v-bind:class="classObject">sddd</div>
<div v-bind:class="[activeClass, errorClass]">dd</div>
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">99</div>
<!-- 绑定到一个样式对象 -->
<div v-bind:style="styleObject">44</div>

</div>

</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      error: null,
      activeClass: "active",
      errorClass: "text-danger",
      activeColor: "red",
      fontSize: 30,
      styleObject: {
        color: "red",
        fontSize: "13px"
      }
    };
  },
  components: {
    classObject: function() {
      return {
        active: this.isActive && !this.error,
        "text-danger": this.error && this.error.type === "fatal"
      };
    }
  }
};
</script>

<style>
</style>
