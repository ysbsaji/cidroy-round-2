import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    statusOptions: [
      { label: "In Transit", value: "inTransit" },
      { label: "Cancelled", value: "cancelled" },
      { label: "Delivered", value: "delivered" },
    ],
    statusValue: [
      {
        key: "inTransit", value: ["STN_CREATED", "STN_CONFIRMED"]
      },
      { key: "cancelled", value: ["STN_CANCELLED", "CANCELLED"]},
      { key: "delivered", value: ["Delivered"]}
    ]
  },
  getters: {
  statusOptions(state) {
    return state.statusOptions
  },
  statusValue(state) {
    return state.statusValue
  }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

// STN_CREATED	In Transit
// STN_CONFIRMED	In Transit
// STN_CANCELLED	Cancelled
// CANCELLED	Cancelled
// DELIVERED	Delivered
