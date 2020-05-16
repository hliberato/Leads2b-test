import Vue from 'vue'
import Vuex from 'vuex'
import accountModule from './account'
import employeeModule from './employee'

Vue.use(Vuex)

export default new Vuex.Store({ modules: { accountModule, employeeModule } })
