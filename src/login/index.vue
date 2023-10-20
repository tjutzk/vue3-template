<template>
  <div class="login_wrap">
    <el-form :model="formData" class="login_form" ref="loginForm" :rules="rules">
      <h1 class="title">vue3 + vite + element + ts</h1>
      <el-form-item prop="username">
        <el-input v-model="formData.username" axlength="50" placeholder="请输入用户名">
          <template #prefix>
            <el-icon class="el-input__icon"><User /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="formData.password"
          type="password"
          show-password
          maxlength="50"
          placeholder="请输入密码"
        >
          <template #prefix>
            <el-icon class="el-input__icon"><Lock /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-button type="primary" class="login_btn" @click="onLoginClick">登录</el-button>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { User, Lock } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';
import type { FormRules } from 'element-plus';

const router = useRouter();
const loginForm = ref();
const formData = reactive({
  username: 'admin',
  password: '123456'
});
const rules = reactive<FormRules>({
  username: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
  password: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
});

const onLoginClick = () => {
  loginForm.value!.validate((valid: boolean) => {
    if (valid) {
      router.push({
        name: 'role'
      });
    }
  });
};
</script>

<style scoped lang="scss">
.login_wrap {
  width: 100vw;
  height: 100vh;
  background-color: #2d3a4b;
  overflow: hidden;
  .login_form {
    width: 400px;
    margin: 50px auto;
    .title {
      text-align: center;
      font-size: 20px;
      color: #ffffff;
      margin-bottom: 20px;
    }
    .login_btn {
      width: 100%;
    }
  }
}
</style>
