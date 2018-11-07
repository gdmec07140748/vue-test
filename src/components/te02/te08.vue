<template>
<div>
<ul id="example-1">
  <li v-for="(item, index) in items" :key='index'>
    {{ item.message }}
  </li>
</ul>

<ul id="example-2">
  <li v-for="(item, index) of items" :key='index'>
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>
</ul>

<ul class="demo">
  <li v-for="(value, index) in object" :key="index">
    {{ value }}
  </li>
</ul>

<div v-for="(value, key, index) in object" :key="index">
  {{ index }}. {{ key }}: {{ value }}
</div>

<!-- computed -->
<li v-for="(n, index) in evenNumbers" :key="index">{{ n }}</li>
<!-- methods -->
<li v-for="(n, index) in even(numbers)" :key="index">{{ n }}</li>
</div>

</template>

<script>
export default {
  data() {
    return {
      object: {
        firstName: "John",
        lastName: "Doe",
        age: 30
      },
      numbers: [1, 2, 3, 4, 5],
      parentMessage: "Parent",
      items: [{ message: "Foo" }, { message: "Bar" }]
    };
  },
  components: {},
  computed: {
    evenNumbers: function() {
      return this.numbers.filter(function(number) {
        return number % 2 === 0;
      });
    }
  },
  methods: {
    even: function(numbers) {
      return numbers.filter(function(number) {
        return number % 2 === 0;
      });
    }
  }
};
</script>

<style>
</style>
