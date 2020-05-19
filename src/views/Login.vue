<template lang="html">
  <div class="login-view">
    <el-form
      v-show="!forgotFormVisible"
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      @submit.native.prevent>
      <el-form-item prop="email">
        <el-input id="cy-input-email" v-model="loginForm.email" placeholder="E-mail" @keyup.enter.native="doLogin" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input id="cy-input-password" v-model="loginForm.password" placeholder="Password" type="password" @keyup.enter.native="doLogin" />
      </el-form-item>
      <br>
      <el-form-item>
        <el-button id="cy-button-login" type="primary" @click="doLogin">
          Login
        </el-button>
        <el-button id="cy-button-forgot" type="text" @click="showForgot">
          Forgot password?
        </el-button>
      </el-form-item>
    </el-form>
    <el-form
      v-show="forgotFormVisible"
      ref="forgotForm"
      :model="forgotForm"
      :rules="forgotFormRules"
      @submit.native.prevent>
      <el-form-item prop="email">
        <el-input id="cy-input-forgotemail" v-model="forgotForm.email" placeholder="E-mail" @keyup.enter.native="recoveryPassword" />
      </el-form-item>
      <br>
      <el-form-item>
        <el-button id="cy-button-recovery" type="primary" @click="recoveryPassword">
          Recovery
        </el-button>
        <el-button type="text" @click="forgotFormVisible = false">
          Back to login
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
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
    },
    forgotFormVisible: false,
    forgotForm: { email: '' },
    forgotFormRules: {
      email: [
        { required: true, message: 'Required Field', trigger: 'submit' },
        { type: 'email', required: true, message: 'Invalid e-mail', trigger: 'submit' }
      ]
    }
  }),
  watch: {
    forgotFormVisible () {
      this.$refs.loginForm.clearValidate()
      this.$refs.forgotForm.clearValidate()
    }
  },
  methods: {
    doLogin () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          const loading = this.$loading({ lock: true, text: 'Loading...' })
          this.$store.dispatch('doLogin', {
            email: this.loginForm.email,
            password: this.loginForm.password
          }).then(() => {
            this.$router.push('Home')
          }).catch(() => {
            this.$notify({
              title: 'Invalid credentials',
              message: 'Check you e-mail and password to proceed.',
              type: 'error',
              position: 'bottom-right'
            })
          }).finally(() => {
            loading.close()
          })
        }
      })
    },
    showForgot () {
      this.forgotForm.email = this.loginForm.email
      this.forgotFormVisible = true
    },
    recoveryPassword () {
      this.$refs.forgotForm.validate(valid => {
        if (valid) {
          const loading = this.$loading({ lock: true, text: 'Finding e-mail...' })
          setTimeout(() => {
            loading.close()
            this.forgotFormVisible = false
            this.$notify({
              title: 'Check your e-mail!',
              message: 'An e-mail has been sent with the instructions to recover your password.',
              type: 'success',
              position: 'bottom-right'
            })
          }, 2000)
        }
      })
    }
  }
}
</script>
<style lang="scss">
.login-view {
  display: flex;
  height: 100%;
  text-align: center;
  .el-form {
    width: 90%;
    max-width: 400px;
    margin: auto;
  }
}
</style>
