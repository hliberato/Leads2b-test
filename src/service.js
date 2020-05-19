import axios from 'axios'

export class ApiService {
  constructor () {
    this._apiUrl = 'api'
  }

  async getToken (loginForm) {
    return axios.get(`${this._apiUrl}/token`, loginForm)
  }

  async getEmployees () {
    return axios.get(`${this._apiUrl}/employee`)
  }

  async upsertEmployee (employeeForm) {
    const action = employeeForm.id ? 'put' : 'post'
    return axios[action](`${this._apiUrl}/employee`, employeeForm)
  }

  async removeEmployee (employeeId) {
    return axios.delete(`${this._apiUrl}/employee`, employeeId)
  }
}
