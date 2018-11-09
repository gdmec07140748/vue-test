<template>
<div>
<div id="blog-posts-events-demo">
  <div :style="{ fontSize: postFontSize + 'em' }">
    <te03
      v-for="post in posts"
      v-bind:key="post.id"
      v-bind:post="post"
      v-on:enlarge-text="postFontSize += 0.1"
    ></te03>
  </div>
</div>
<div :style="{ fontSize: postFontSize2 + 'em' }">
 <te03
      v-for="post in posts"
      v-bind:key="post.id"
      v-bind:post="post"
      v-on:enlarge-text2="postFontSize2 += $event"
    ></te03>
</div>
<div :style="{ fontSize: postFontSize + 'em' }">
 <te03
      v-for="post in posts"
      v-bind:key="post.id"
      v-bind:post="post"
      v-on:enlarge-text="onEnlargeText(0.1)"
    ></te03>
</div>
</div>

</template>

<script>
import te03 from "@/components/te03/te03";
export default {
  data() {
    return {
      posts: [
        { id: 1, title: "My journey with Vue" }
        // { id: 2, title: "Blogging with Vue" },
        // { id: 3, title: "Why Vue is so fun" }
      ],
      postFontSize: 2,
      postFontSize2: 2
    };
  },
  components: {
    te03
  },
  methods: {
    onEnlargeText: function(enlargeAmount) {
      this.postFontSize += enlargeAmount;
    }
  }
};
</script>

<style>
</style>
