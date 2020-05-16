import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const account = {
  state: {
    email: '',
    token: localStorage.getItem('leads2btoken') || null
  },
  mutations,
  actions,
  getters
}

export default account
