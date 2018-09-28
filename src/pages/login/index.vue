<template>
  <div class="login_page fillcontain">
        <transition name="form-fade" mode="in-out">
            <section class="form_contianer" v-show="showLogin">
                <el-form :model="loginForm" :rules="rules" ref="loginForm">
                    <el-form-item prop="username">
                        <!--icon定义字符串，：icon定义方法-->
                        <el-input v-model="loginForm.username" auto-complete="off" placeholder="| 请输入用户名"
                                  :icon="userNameClass" @focus="handleUserFocus(true)" @blur="handleUserFocus(false)"
                                  @keyup.enter.native="submitForm('loginForm')"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" placeholder="| 请输入密码" v-model="loginForm.password"
                                  :icon="passwordClass" @focus="handlePwdFocus(true)" @blur="handlePwdFocus(false)"
                                  @keyup.enter.native="submitForm('loginForm')"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button :loading="loading" @click="submitForm('loginForm')" class="submit_btn">登录</el-button>
                    </el-form-item>
                </el-form>
            </section>
        </transition>
    </div>
</template>

<script>
export default {
  name: "",

  data() {
    return {
      focusUserName: false, // 定义变量:输入框获取焦点
      focusPassword: false,
      loginForm: {
        username: "",
        password: ""
      },
      showLogin: false,
      loading: false,
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  computed: {
    userNameClass() {
      return this.focusUserName
        ? "blank iconfont icon-account focus"
        : "blank iconfont icon-account";
    },
    passwordClass() {
      return this.focusPassword
        ? "blank iconfont icon-lock focus"
        : "blank iconfont icon-lock";
    }
  },
  mounted() {
    this.showLogin = true;
  },
  methods: {
    async submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          this.$message({
          type: "success",
          message: "登录成功"
        });
          this.$router.push("/home");
          // this.loading = true;
          // 请求登录接口
          //     let res = await login({
          //         usernameOrEmailAddress: this.loginForm.username,
          //         password: this.loginForm.password
          //       }),
          //       loginSuccess = res.success;
          //     if (loginSuccess && res.result) {
          //       /*将用户名本地缓存*/
          //       this.saveUserToken(res.result);
          //       this.$message({
          //         type: "success",
          //         message: "登录成功"
          //       });
          //       this.$router.push("navigation"); //this.$router.push('manage')
          //     } else {
          //       this.$message({
          //         type: "error",
          //         message: (res.error && res.error.details) || "用户名或密码错误"
          //       });
          //       this.loading = false;
          //     }
          //   } else {
          //     this.$notify.error({
          //       title: "错误",
          //       message: "请输入正确的用户名密码",
          //       offset: 100
          //     });
          //     return false;
        }
      });
    },
    handleUserFocus: function(isFocus) {
      this.focusUserName = isFocus;
    },
    handlePwdFocus: function(isFocus) {
      this.focusPassword = isFocus;
    }
  }
};
</script>

<style lang='less' rel='stylesheet/less' >
.login_page {
  width: 100%;
  height: 100%;
  background-color: #324057;
  .form_contianer {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 320px;
    height: 230px;
    border-radius: 5px;
    box-sizing: border-box;
    text-align: center;
    padding: 35px 45px;
    background-color: #fff;
    margin-left: -195px;
    margin-top: -135px;
    // transform: translate3d(-50%, -50%, 0);
    .submit_btn {
      width: 100%;
      font-size: 16px;
      background-color: #1aa2ff;
      border: 1px solid #1aa2ff;
      color: #ffffff;
    }
  }
  .focus {
    color: #1aa2ff;
  }
  /*更改element原有的样式*/
  input {
    background: rgb(243, 233, 178);
    border-color: #202d3d;
    color: #333;
  }

  .el-form-item__error {
    color: #e04f78;
    padding-top: 8px;
  }
  .el-form-item {
    margin-bottom: 30px;
  }
  .el-input__icon {
    left: 0;
  }
  .el-input__icon + .el-input__inner {
    padding-left: 40px;
  }
  .el-form-item.is-error .el-input__inner {
    border-color: #e04f78;
  }
  .form-fade-enter,
  .form-fade-leave-active {
    transform: translate3d(0, -50%, 0);
    opacity: 0;
  }
  .form-fade-enter-active,
  .form-fade-leave-active {
    transition: all 0.3s;
  }
}
</style>
