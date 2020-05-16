import axios from 'axios'

const loginActions = {

  doLogin ({ commit }, loginForm) {
    return new Promise((resolve, reject) => {
      axios.get('/api/login').then(response => {
        commit('setToken', response.data.token)
        resolve(resolve)
      }).catch(error => {
        reject(error)
      })
    })
  }

}

export default loginActions
