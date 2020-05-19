import { ApiService } from '../../service.js'
const service = new ApiService()

const employeeActions = {
  getEmployees: (context) =>
    service
      .getEmployees()
      .then((res) => context.commit('setEmployees', res.data)),
  upsertEmployee: (context, employeeForm) =>
    service
      .upsertEmployee(employeeForm)
      .then((res) => context.commit('upsertEmployee', res.data)),
  removeEmployee: (context, employeeId) =>
    service
      .removeEmployee(employeeId)
      .then((res) => context.commit('removeEmployee', res.data))
}

export default employeeActions
