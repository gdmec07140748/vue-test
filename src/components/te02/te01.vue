<template>
<div>
   <span>Message : {{msg}} </span>

    <!-- 执行一次性地插值 -->
    <span v-once>这个将不会改变: {{ msg }}</span>

    <!-- 为了输出真正的 HTML -->
    <p>Using mustaches: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span> </p>

    <!-- Mustache 语法作用在 HTML 特性上 -->
    <div v-bind:id="dynamicId"></div>
    <div :id="dynamicId"></div>

    <button v-bind:disabled="isButtonDisabled">Button</button>

    <p v-if="seen">现在你看到我了</p>

    <!-- 参数是监听的事件名 -->
    <a v-on:click="doSomething"></a>
    <a @click="doSomething"></a>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
