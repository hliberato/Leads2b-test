<template lang="html">
  <div>
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
    <EmployeeDialog :visible.sync="employeeDialogVisible" :employee="employeeToEdit" />
  </div>
</template>

<script>
export default {
  name: 'EmployeeTable',
  components: { EmployeeDialog: () => import('../components/EmployeeDialog') },
  data: () => ({
    employeeDialogVisible: false,
    employeeToEdit: {}
  }),
  computed: {
    employees () {
      return this.$store.getters.employees
    }
  },
  methods: {
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
@media (max-width: 414px) {
  .el-table {
    font-size: 12px;
    th, td {
      padding: 2px 0;
    }
  }
}
</style>
