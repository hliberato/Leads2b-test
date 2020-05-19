import { ApiService } from '../../service.js'
const service = new ApiService()

const loginActions = {
  doLogin: (context, loginForm) =>
    service
      .getToken(loginForm)
      .then((res) => context.commit('setToken', res.data))
}

export default loginActions
