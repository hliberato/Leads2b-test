<template lang="html">
  <el-dialog
    :visible.sync="dialogVisible"
    :close-on-click-modal="false"
    :close-on-press-escape="!loading"
    :show-close="!loading"
    :title="newEmployee ? 'Add employee' : 'Edit employee'"
    class="employee-component">
    <el-form
      ref="employeeForm"
      :model="employeeForm"
      :disabled="loading"
      :rules="employeeFormRules">
      <el-form-item label="First name" prop="firstName">
        <el-input v-model="employeeForm.firstName" />
      </el-form-item>
      <el-form-item label="Last name" prop="lastName">
        <el-input v-model="employeeForm.lastName" />
      </el-form-item>
      <el-form-item label="E-mail" prop="email">
        <el-input v-model="employeeForm.email" />
      </el-form-item>
      <el-form-item label="Functione" prop="function">
        <el-input v-model="employeeForm.function" />
      </el-form-item>
      <el-form-item label="Active" prop="active">
        <el-switch v-model="employeeForm.active" />
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button :disabled="loading" @click="dialogVisible = false">Cancel</el-button>
      <el-button :loading="loading" type="primary" @click="addOrEdit">
        {{ newEmployee ? 'Add' : 'Edit' }}
      </el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'Employee',
  props: {
    employee: {
      type: Object,
      default: () => {}
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      loading: false,
      employeeForm: {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        function: '',
        active: true
      },
      employeeFormRules: {
        firstName: [{ required: true, message: 'Required Field', trigger: 'submit' }],
        lastName: [{ required: true, message: 'Required Field', trigger: 'submit' }],
        function: [{ required: true, message: 'Required Field', trigger: 'submit' }],
        email: [
          { required: true, message: 'Required Field', trigger: 'submit' },
          { type: 'email', required: true, message: 'Invalid e-mail', trigger: 'submit' }
        ]
      }
    }
  },
  computed: {
    dialogVisible: {
      get () {
        return this.visible
      },
      set (visible) {
        this.$emit('update:visible', visible)
      }
    },
    newEmployee () {
      return Object.keys(this.employee).length === 0
    }
  },
  watch: {
    dialogVisible (visible) {
      if (visible) {
        this.resetFields()
      }
    }
  },
  methods: {
    addOrEdit () {
      this.$refs.employeeForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('addOrEdit', this.employeeForm).then(() => {
            this.dialogVisible = false
            const action = this.newEmployee ? 'added' : 'edited'
            this.$notify({
              title: `Employee ${action}`,
              message: `${this.employeeForm.firstName} successfully ${action}.`,
              type: 'success',
              position: 'bottom-right'
            })
          }).catch(error => {
            console.error(error)
          }).finally(() => {
            this.loading = false
          })
        }
      })
    },
    resetFields () {
      this.employeeForm = {
        id: this.employee.id,
        firstName: this.employee.firstName,
        lastName: this.employee.lastName,
        email: this.employee.email,
        function: this.employee.function,
        active: this.employee.active
      }
    }
  }
}
</script>

<style lang="scss">
.employee-component {
  .el-dialog {
    width: 90%;
    max-width: 400px;
  }
}
</style>
