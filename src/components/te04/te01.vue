<template>
<div>
<h3>{{ postTitle }}</h3>
</div>

</template>

<script>
/**
  props: {
    title: String,
    likes: Number,
    isPublished: Boolean,
    commentIds: Array,
    author: Object
  }
 */
export default {
  data() {
    return {
      counter: this.postTitle
    };
  },
  props: ["postTitle"],
  components: {}
};
</script>

<style>
</style>
