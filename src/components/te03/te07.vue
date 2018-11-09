<template>
<div>
<div id="dynamic-component-demo" class="demo">
  <button
    v-for="tab in tabs"
    v-bind:key="tab"
    v-bind:class="['tab-button', { active: currentTab === tab }]"
    v-on:click="currentTab = tab"
  >{{ tab }}</button>

  <component
    v-bind:is="currentTabComponent"
    class="tab"
  ></component>
  <component-c></component-c>
</div>
</div>

</template>

<script>
import tabHome from "@/components/te03/tab-home";
import tabArchive from "@/components/te03/tab-archive";
import tabPosts from "@/components/te03/tab-posts";
var ComponentA = {
  template: '<div id="father"><h3>ComponentA</h3></div>'
};
var ComponentB = {
  template: '<div id="child"><component-a></component-a><h3>ComponentB</h3></div>',
  components: {
    "component-a": ComponentA
  }
};
var ComponentC = {
  template: '<div id="child"><component-b></component-b><h3>ComponentC</h3></div>',
  components: {
    "component-b": ComponentB
  }
};
export default {
  data() {
    return {
      currentTab: "Home",
      tabs: ["Home", "Posts", "Archive"]
    };
  },
  components: {
    tabHome,
    tabArchive,
    tabPosts,
    "component-c": ComponentC
  },
  computed: {
    currentTabComponent: function() {
      return "tab-" + this.currentTab.toLowerCase();
    }
  }
};


</script>

<style>
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
