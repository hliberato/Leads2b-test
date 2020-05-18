const loginGetters = {
  isLoggedIn: state => !!state.token,
  loginToken: state => state.token,
  loginEmail: state => state.email
}

export default loginGetters
