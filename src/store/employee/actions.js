import axios from 'axios'

const employeeActions = {
  getEmployees ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/api/employee').then(response => {
        commit('setEmployees', response.data)
        resolve(resolve)
      }).catch(error => {
        reject(error)
      })
    })
  },
  addOrEdit ({ commit }, employeeForm) {
    return new Promise((resolve, reject) => {
      const action = employeeForm.id ? 'put' : 'post'
      axios[action]('/api/employee', employeeForm).then(response => {
        commit('addOrEditEmployee', response.data)
        resolve(resolve)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default employeeActions
