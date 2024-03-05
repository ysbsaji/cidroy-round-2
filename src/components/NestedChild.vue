<template>
    <div>
      <input v-model="deepValue" @change="updateParent" />
    </div>
  </template>
  
  <script>
  export default {
    props: ['nestedData'],
    computed: {
      deepValue: {
        get() {
          // Retrieve the deeply nested value
          return this.nestedData.level1.level2.items[2].number;
        },
        set(value) {
          // Propose a method to update this deeply nested value so that the parent's data also updates reactively.
          // this.$set(this.nestedData, this.nestedData.level1.level2.items[2].number, value)
          // console.log(value);
          this.$emit('update', value);
          // this.nestedData.level1.level2.items[2].number = value
        },
      },
    },
    methods: {
      updateParent(value) {
        console.log(value);
        
        // Implement the logic to emit an event or otherwise communicate the change back to the parent
        // in a way that ensures reactivity and updates the parent component's nestedData.
      },
    },
  };
  </script>