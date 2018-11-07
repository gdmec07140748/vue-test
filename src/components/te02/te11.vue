<template>
<div>
<!-- 当选中时，`picked` 为字符串 "a" -->
<input type="radio" v-model="picked" value="a">dd

<!-- `toggle` 为 true 或 false -->
<input type="checkbox" v-model="toggle">dd

<!-- 当选中第一个选项时，`selected` 为字符串 "abc" -->
<select v-model="selected">
  <option value="abc">ABC</option>
</select>

<input
  type="checkbox"
  v-model="toggle"
  true-value="yes"
  false-value="no"
>
{{ toggle }}
<input type="radio" v-model="pick" v-bind:value="a">
{{pick}}
{{selected}}

<select v-model="selected">
    <!-- 内联对象字面量 -->
  <option v-bind:value="{ number: 123 }">123</option>
</select>
<!-- 在“change”时而非“input”时更新 -->
<input v-model.lazy="msg" >

</div>

</template>

<script>
export default {
  data() {
    return {
      picked: "",
      toggle: "",
      pick: "",
      a:'',
      selected:''
    };
  },
  components: {}
};
</script>

<style>
</style>
