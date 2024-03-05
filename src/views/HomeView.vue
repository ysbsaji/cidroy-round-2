<template>
  <div>
    <v-card class="pa-6">
      <v-row>
        
        <div class="text-center">
          <v-menu offset-y :close-on-content-click="false">
            <template v-slot:activator="{ on, attrs }">
              Apply Status Filter 
              <v-btn
                fab
                icon
                v-bind="attrs"
                v-on="on"
              >
              <FilterIconComponent/>
              </v-btn>
            </template>
            <v-card class="pa-6">
              <v-row>
                <filter-component :options="statusOptions" @selected-value="selectedValue"/>
              </v-row>
            </v-card>
          </v-menu>
        </div>
      </v-row>
    </v-card>
    <v-card class="pa-6 my-12">
      <v-row>
        selected value : <v-chip v-for="item in selectedData" :key="item" class="mx-2">
          {{ item }}
        </v-chip>
      </v-row>
    </v-card>

    <v-card>
      <div>
    <NestedChild :nestedData="nestedData" @update="updateData"/>
    Your number is {{ nestedData.level1.level2.items[2].number }}
  </div>
    </v-card>
  </div>
</template>

<script>
  import FilterComponent from '../components/FilterComponent'
  import FilterIconComponent from '../components/FilterIconComponent'
  import NestedChild from '../components/NestedChild.vue';
  import { mapGetters } from 'vuex';

  export default {
    name: 'HomeView',
    data() {
      return {
        showFilterDialog: false,
        selectedData: [],
        nestedData: {
        level1: {
          level2: {
            items: [1, 2, { number: 3 }],
          },
        },
      },
      }
    },
    components: {
      FilterComponent,
      FilterIconComponent,
      NestedChild
    },
    computed: {
      ...mapGetters(["statusOptions", "statusValue"])
    },
    methods: {
      selectedValue(data) {
        this.selectedData = []
        data.forEach(element => {
          this.statusValue.find(val => {
           if (val.key === element) this.selectedData = this.selectedData.concat(val.value)
         })
        });
      },
      updateData(data) {
        this.nestedData.level1.level2.items[2].number = data
      }
    }
  }
</script>
