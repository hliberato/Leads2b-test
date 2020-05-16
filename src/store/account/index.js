import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const account = {
  state: {
    email: '',
    token: localStorage.getItem('leads2blogin') || ''
  },
  mutations,
  actions,
  getters
}

export default account
