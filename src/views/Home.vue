<template lang="html">
  <div class="home-view">
    <div class="home-view__header">
      <el-button id="cy-button-add" type="success" icon="el-icon-plus" @click="$refs.employeeTable.addEmployee()">
        Add employee
      </el-button>
      <div>
        {{ email }}
        (<el-button type="text" @click="logout">
          Exit
        </el-button>)
      </div>
    </div>
    <EmployeeTable ref="employeeTable" />
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    EmployeeTable: () => import('../components/EmployeeTable')
  },
  computed: {
    email () {
      return this.$store.getters.loginEmail
    }
  },
  mounted () {
    const loading = this.$loading({ lock: true, text: 'Loading employees...' })
    this.$store.dispatch('getEmployees').finally(() => {
      loading.close()
    })
  },
  methods: {
    logout () {
      this.$confirm('You are leaving the system. Are you sure?', 'Logout', {
        confirmButtonText: 'Logout system',
        cancelButtonText: 'Cancel'
      }).then(() => {
        this.$store.commit('logout')
        this.$store.commit('clearEmployees')
        this.$router.push('Login')
      })
    }
  }
}
</script>
<style lang="scss">
@import '../main.scss';

.home-view {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;

  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    padding: 0 20px;
  }

  @media (max-width: 414px) {
    &__header {
      align-items: center;
      flex-direction: column-reverse;
    }

    .el-button--success {
      padding: 7px 15px;
      font-size: 12px;
      border-radius: 3px;
    }
  }
}

</style>
