import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const employee = {
  state: {
    employees: []
  },
  mutations,
  actions,
  getters
}

export default employee
