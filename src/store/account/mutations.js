const loginMutations = {

  setToken (state, params) {
    if (params) {
      state.token = params.token
      state.email = params.email
      localStorage.setItem(
        'leads2blogin',
        JSON.stringify({ token: params.token, email: params.email })
      )
    }
  },
  logout (state) {
    state.token = null
    state.email = null
    localStorage.removeItem('leads2blogin')
  }

}

export default loginMutations
