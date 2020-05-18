import mutations from './mutations'
import actions from './actions'
import getters from './getters'
const loginInfo = JSON.parse(localStorage.getItem('leads2blogin')) || {}

const account = {
  state: {
    email: loginInfo.email,
    token: loginInfo.token
  },
  mutations,
  actions,
  getters
}

export default account
