<template>
  <div class="pa-4">
      <v-row>
      <v-text-field
        label="Search"
        outlined
        class=""
        dense
        v-model="search"
        append-icon="mdi-magnify"
      ></v-text-field>
      
      </v-row>
      <v-row>
        <v-list :key="reRender">
          <v-list-item v-for="(item, index) in filterOptions" :key="index">
            <v-checkbox :label="item.label" v-model="selected" :value="item.value"></v-checkbox>
          </v-list-item>
      </v-list>
      </v-row>
  </div>
</template>

<script>
  export default {
    name: 'FilterComponent',
    data() {
      return {
        search: null,
        filterOptions: [],
        selected: [],
        reRender: 0
      }
    },
    props: ["options", "selected-value"],
    watch: {
      selected(val) {
        this.$emit("selected-value", val)
      },
      search(val) {
        this.reRender++
        if (val) {
          this.filterOptions = []
          this.options.filter(value => {
            const search = val.toLowerCase()
            const data = value.label.toLowerCase()
            data.includes(search) && this.filterOptions.push(value)
          })
        } else {
          this.filterOptions = this.options
        }
      }
    },
    mounted() {
      this.filterOptions = this.options
    },
    methods: {
      // selectedFileter(data) {
      //   this.$emit("selected-value", data.value)
      // }
    }
  }
</script>
