import Vue from 'vue'

const loginActions = {

  doLogin ({ commit }, loginForm) {
    return new Promise((resolve, reject) => {
      Vue.http.get('/api/login').then(response => {
        debugger
        resolve(resolve)
      }, error => {
        reject(error)
      })
    })
  }

}

export default loginActions
