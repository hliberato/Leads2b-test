import axios from 'axios'

const employeeActions = {

  getEmployee ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/api/employee').then(response => {
        commit('setEmployees', response.data)
        resolve(resolve)
      }).catch(error => {
        reject(error)
      })
    })
  }

}

export default employeeActions
