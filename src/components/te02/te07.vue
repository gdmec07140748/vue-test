<template>
<div>
<h1 v-if="ok">Yes</h1>
<h1 v-else>No</h1>
<div v-if="Math.random() > 0.5">
  Now you see me
</div>
<div v-else>
  Now you don't
</div>

<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>

<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address">
</template>

<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username" key="username-input">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address" key="email-input">
</template>

<h1 v-show="ok">Hello!</h1>
<!-- v-if 有更高的切换开销，
  而 v-show 有更高的初始渲染开销。
  因此，如果需要非常频繁地切换，则使用 v-show 较好；
      如果在运行时条件很少改变，则使用 v-if 较好。 -->
</div>

</template>

<script>
export default {
  data() {
    return {
      type: "A"
    };
  },
  components: {}
};
</script>

<style>
</style>
