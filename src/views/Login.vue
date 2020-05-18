<template lang="html">
  <div>
    <el-form ref="loginForm" :rules="loginRules" :model="loginForm">
      <el-form-item prop="email">
        <el-input v-model="loginForm.email" placeholder="E-mail" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginForm.password" placeholder="Password" type="password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="doLogin">
          Login
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        email: '',
        password: ''
      },
      loginRules: {
        email: [
          { required: true, message: 'Required Field', trigger: 'submit' },
          { type: 'email', required: true, message: 'Invalid e-mail', trigger: 'submit' }
        ],
        password: [
          { required: true, message: 'Required Field', trigger: 'submit' }
        ]
      }
    }
  },
  methods: {
    doLogin () {
      const loading = this.$loading({ lock: true, text: 'Loading...' })
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$store.dispatch('doLogin', {
            email: this.loginForm.email,
            password: this.loginForm.password
          }).then(() => {
            this.$router.push('Home')
          }).catch(error => {
            console.error(error)
          }).finally(() => {
            loading.close()
          })
        }
      })
    }
  }
}
</script>
