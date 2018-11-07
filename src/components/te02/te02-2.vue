<template>
 <div id="example">
        <p>Original message: "{{ message }}"</p>
        <p>Computed reversed message: "{{ reversedMessage }}"</p>
    </div>
</template>

<script>
export default {
  el: "#example",
  data: {
    message: "Hello"
  },
  // 计算属性 依赖进行缓存
  computed: {
    // 计算属性的 getter
    reversedMessage: function() {
      // `this` 指向 vm 实例
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>

<style>
</style>
