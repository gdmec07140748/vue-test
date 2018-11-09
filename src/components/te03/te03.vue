<template>
<div>
<div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge-text')">
        Enlarge text
      </button>
      <div v-html="post.content"></div>
    </div>
<div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge-text2', 0.1)">
        Enlarge text2
      </button>
      <div v-html="post.content"></div>
    </div>
</div>

</template>

<script>
export default {
  props: ["post"],
  data() {
    return {};
  },
  components: {}
};
</script>

<style>
</style>
