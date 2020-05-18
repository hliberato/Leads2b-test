<template lang="html">
  <el-dialog
    :visible.sync="addDialogVisible"
    :close-on-click-modal="false"
    title="Add employee"
    class="add-employee">
    <el-form
      ref="addForm"
      :model="addForm"
      :rules="addFormRules">
      <el-form-item label="First name" prop="firstName">
        <el-input v-model="addForm.firstName" />
      </el-form-item>
      <el-form-item label="Last name" prop="lastName">
        <el-input v-model="addForm.lastName" />
      </el-form-item>
      <el-form-item label="E-mail" prop="email">
        <el-input v-model="addForm.email" />
      </el-form-item>
      <el-form-item label="Functione" prop="function">
        <el-input v-model="addForm.function" />
      </el-form-item>
      <el-form-item label="Active" prop="active">
        <el-switch v-model="addForm.active" />
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="addDialogVisible = false">Cancel</el-button>
      <el-button type="primary" icon="el-icon-plus" @click="add">Add</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'AddEmployee',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      addForm: {
        firstName: '',
        lastName: '',
        email: '',
        function: '',
        active: true
      },
      addFormRules: {
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
    addDialogVisible: {
      get () {
        return this.visible
      },
      set (visible) {
        this.resetFields()
        this.$emit('update:visible', visible)
      }
    }
  },
  methods: {
    add () {
      this.$refs.addForm.validate(valid => {
        if (valid) {
          this.$store.dispatch('addEmployee', this.addForm).then(() => {

          }).catch(error => {
            console.error(error)
          }).finally(() => {

          })
        }
      })
    },
    resetFields () {
      this.addForm = {
        firstName: '',
        lastName: '',
        email: '',
        function: '',
        active: true
      }
    }
  }
}
</script>

<style lang="scss">
.add-employee {
  .el-dialog {
    width: 90%;
    max-width: 400px;
  }
}
</style>
