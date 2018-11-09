<template>
<div>
<te01 :title="posts[0].title"></te01>
<te01 :title="posts[1].title"></te01>
<te01 :title="posts[2].title"></te01>
<te01 title="first"></te01>
<te01
  v-for="post in posts"
  :key="post.id"
  :title="post.title"
></te01>
</div>

</template>

<script>
import te01 from "@/components/te03/te01";
export default {
  data() {
    return {
      posts: [
        { id: 1, title: "My journey with Vue" },
        { id: 2, title: "Blogging with Vue" },
        { id: 3, title: "Why Vue is so fun" }
      ],
      postFontSize:1,
    };
  },
  components: {
    te01
  }
};
</script>

<style>
</style>
