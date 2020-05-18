import axios from 'axios'

const loginActions = {

  doLogin ({ commit }, loginForm) {
    return new Promise((resolve, reject) => {
      axios.get('/api/login', loginForm).then(response => {
        commit('setToken', { token: response.data.token, email: loginForm.email })
        resolve(resolve)
      }).catch(error => {
        reject(error)
      })
    })
  }

}

export default loginActions
