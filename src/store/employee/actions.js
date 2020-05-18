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
  },
  removeEmployee ({ commit }, employeeId) {
    return new Promise((resolve, reject) => {
      axios.delete('/api/employee', { employeeId }).then(response => {
        commit('removeEmployee', response.data)
        resolve(resolve)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default employeeActions
