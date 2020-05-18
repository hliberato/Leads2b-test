import Vue from 'vue'

const employeeMutations = {
  setEmployees (state, employees) {
    if (Array.isArray(employees) && employees.length) state.employees = employees.reverse()
  },
  addOrEditEmployee (state, employee) {
    const employeeIndex = state.employees.findIndex(e => e.id === employee.id)
    if (employeeIndex !== -1) {
      Vue.set(state.employees, employeeIndex, employee)
    } else {
      employee.id = state.employees[0].id + 1
      state.employees.unshift(employee)
    }
  },
  removeEmployee (state, employeeId) {
    const employeeIndex = state.employees.findIndex(e => e.id === employeeId)
    if (employeeIndex !== -1) Vue.delete(state.employees, employeeIndex)
  }
}

export default employeeMutations
