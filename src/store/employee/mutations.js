const employeeMutations = {

  setEmployees (state, employees) {
    if (Array.isArray(employees) && employees.length) state.employees = employees.reverse()
  }
}

export default employeeMutations
