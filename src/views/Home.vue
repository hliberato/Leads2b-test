<template lang="html">
  <div class="home-view">
    <div class="home-view__header">
      <el-button type="success" icon="el-icon-plus" @click="addEmployee">
        Add employee
      </el-button>
      <div>
        {{ email }}(
        <el-button type="text" @click="logout">
          Sair
        </el-button>)
      </div>
    </div>
    <el-table :data="employees" height="100%">
      <el-table-column prop="id" label="#" align="center" />
      <el-table-column prop="firstName" label="First Name" />
      <el-table-column prop="lastName" label="Last Name" />
      <el-table-column prop="email" label="E-mail" />
      <el-table-column prop="function" label="Function" />
      <el-table-column prop="active" label="Active" align="center">
        <template slot-scope="scope">
          <el-tooltip v-if="scope.row.active" content="This employee is ACTIVE">
            <i class="el-icon-check" />
          </el-tooltip>
          <el-tooltip v-else content="This employee is INACTIVE">
            <i class="el-icon-close" />
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column align="center">
        <template slot-scope="scope">
          <el-tooltip content="Edit employee">
            <el-button type="text" icon="el-icon-edit" @click="editEmployee(scope.row)" />
          </el-tooltip>
          <el-tooltip content="Remove employee">
            <el-button type="text" icon="el-icon-delete" @click="editEmployee(scope.row)" />
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
    <Employee :visible.sync="employeeDialogVisible" :employee="employeeToEdit" />
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    Employee: () => import('../components/Employee')
  },
  data () {
    return {
      employeeDialogVisible: false,
      employeeToEdit: {}
    }
  },
  computed: {
    email () {
      return this.$store.getters.loginEmail
    },
    employees () {
      return this.$store.getters.employees
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
      this.$confirm('Are you sure?', 'Logout', {
        confirmButtonText: 'Logout system',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        this.$store.commit('logout')
        this.$router.push('Login')
      })
    },
    addEmployee () {
      this.employeeToEdit = {}
      this.employeeDialogVisible = true
    },
    editEmployee (employeeToEdit) {
      this.employeeToEdit = employeeToEdit
      this.employeeDialogVisible = true
    }
  }
}
</script>
<style lang="scss">
.home-view {
  height: 100%;
  display: flex;
  flex-direction: column;
  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .el-icon-check {
    color: #67C23A;
  }
  .el-icon-close, .el-icon-delete {
    color: #F56C6C;
  }
}
</style>
