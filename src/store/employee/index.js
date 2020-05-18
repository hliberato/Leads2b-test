import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const login = {
  state: {
    employees: [],
    employee: {}
  },
  mutations,
  actions,
  getters
}

export default login
