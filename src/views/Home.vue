<template lang="html">
  <div class="home-view">
    <div class="home-view__header">
      <el-button type="success" icon="el-icon-plus" @click="addEmployee">
        Add employee
      </el-button>
      <div>
        {{ email }}
        (<el-button type="text" @click="logout">
          Exit
        </el-button>)
      </div>
    </div>
    <el-table :data="employees" height="100%">
      <el-table-column prop="id" label="#" align="center" min-width="50px" />
      <el-table-column prop="firstName" label="First name" min-width="90px" />
      <el-table-column prop="lastName" label="Last name" min-width="90px" />
      <el-table-column prop="email" label="E-mail" min-width="120px" />
      <el-table-column prop="function" label="Function" min-width="120px" />
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
            <el-button type="text" icon="el-icon-delete" @click="removeEmployee(scope.row.id)" />
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
      this.$confirm('You are leaving the system. Are you sure?', 'Logout', {
        confirmButtonText: 'Logout system',
        cancelButtonText: 'Cancel'
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
    },
    removeEmployee (employeeId) {
      this.$confirm('Are you sure?', 'Remove employee', {
        confirmButtonText: 'Remove',
        confirmButtonClass: 'el-button--danger',
        cancelButtonText: 'Cancel',
        iconClass: 'el-icon-delete'
      }).then(() => {
        const loading = this.$loading({ lock: true, text: 'Loading employees...' })
        this.$store.dispatch('removeEmployee', employeeId).catch(error => {
          console.error(error)
        }).finally(() => {
          loading.close()
        })
      })
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
    padding: 0 20px;
  }
  .el-icon-check {
    color: #67C23A;
  }
  .el-icon-close, .el-icon-delete {
    color: #F56C6C;
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
    .el-table {
      font-size: 12px;
      th, td {
        padding: 2px 0;
      }
    }
  }
}

</style>
