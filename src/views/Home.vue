<template lang="html">
  <div>
    <el-button type="text" @click="logout">
      Sair
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    logout () {
      this.$confirm('Are you sure', 'Logout', {
        confirmButtonText: 'Logout system',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        this.$store.commit('logout')
        this.$router.push('Login')
      })
    }
  }
}
</script>
