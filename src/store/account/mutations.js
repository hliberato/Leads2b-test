const loginMutations = {

  setToken (state, token) {
    if (token) {
      state.token = token
      localStorage.setItem('leads2btoken', token)
    }
  },
  logout (state) {
    state.token = null
  }

}

export default loginMutations
