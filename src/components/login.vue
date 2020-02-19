<template>
    <div class="page-account">
      <div class="page-account-container">
        <div class="page-account-top">
          <div class="page-account-top-logo">
            <img src="https://file.iviewui.com/admin-pro-dist/img/logo.7b8cc895.png" alt="logo" />
          </div>
          <div class="page-account-top-desc">iView Admin Pro 企业级中台前端/设计解决方案</div>
        </div>
        <div class="ivu-login">
          <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
            <FormItem prop="user">
                <Input type="text" size="large" v-model="formInline.user" placeholder="Username">
                  <Icon type="ios-person-outline" slot="prefix"></Icon>
              </Input>
            </FormItem>
            <FormItem prop="password">
                <Input type="password" size="large" v-model="formInline.password" placeholder="Password">
                  <Icon type="ios-lock-outline" slot="prefix"></Icon>
              </Input>
            </FormItem>
            
             <FormItem>
                <div class="page-account-auto-login">
              <Checkbox v-model="single">自动登录</Checkbox>
              <a href>忘记密码</a>
            </div>
            <div class="ivu-login-submit">
              <Button @click="handleSubmit" type="primary" long>登录</Button>
            </div>
            </FormItem>
        </Form>
        </div>
      </div>
    </div>
</template>
<script type="text/ecmascript-6">
export default {
  data() {
    return {
      formInline: {
        user: "",
        password: ""
      },

      single: true,
      ruleInline: {
        user: [{ required: true, message: "请填写用户名", trigger: "blur" }],
        password: [
          { required: true, message: "请填写密码", trigger: "blur" },
          {
            type: "string",
            min: 6,
            message: "密码长度不能小于6位",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit() {
      if(this.formInline.user == 'admin' && this.formInline.password == '123456'){
        // let arr = ["pickUp", "acquisition", "module"];
        this.$Message.success("登录成功!");
        // this.$router.push({ path: arr[0] });
        this.$router.push('/home')
      }else{
        this.$Message.error("用户名或密码输入不正确，请重新输入!");
      }
    },
  },
  components: {}
};
</script>
<style scoped>
.page-account {
    width:100%;
    background-image: url(https://file.iviewui.com/admin-pro-dist/img/body.8aa7c4a6.svg);
    background-repeat: no-repeat;
    /* background-position: 50%; */
    background-size: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
    /* height: 100vh; */
    overflow: auto;
}
/* .page-account {
    
} */
.page-account-container {
    padding: 32px 0 24px 0;
}

.page-account-container {
    flex: 1;
    padding: 32px 0;
    text-align: center;
    width: 384px;
    margin: 0 auto;
}
.page-account-top {
    padding: 32px 0;
}
.page-account-top-logo img {
    height: 75px;
}
.page-account-top-desc {
    font-size: 14px;
    color: #808695;
}
.ivu-input-wrapper {
    /* display: inline-block; */
    width: 100%;
    position: relative;
    vertical-align: middle;
    line-height: normal;
}
.ivu-form-inline .ivu-form-item {
    display: inline-block;
    margin-right: 10px;
    vertical-align: top;
    width: 100%;
}
.ivu-form-item {
    margin-bottom: 24px;
    vertical-align: top;
    zoom: 1;
}
.ivu-input:focus, .ivu-input:hover {
    border-color: #57a3f3;
}
.ivu-input-with-prefix {
    padding-left: 32px;
}
.ivu-input-large {
    font-size: 16px;
    padding: 6px 7px;
    height: 40px;
}
.ivu-form-item-content {
    position: relative;
    line-height: 32px;
    font-size: 14px;
}
.ivu-login .ivu-input{
  height: 40px!important;
}
.page-account-auto-login {
    margin-bottom: 24px;
    text-align: left;
}
.ivu-checkbox-wrapper.ivu-checkbox-large {
    font-size: 16px;
}
.ivu-checkbox-wrapper {
    cursor: pointer;
    font-size: 14px;
    display: inline-block;
    margin-right: 8px;
}
.page-account-auto-login a {
    float: right;
    color: #2d8cf0;
    background: transparent;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    transition: color .2s ease;
    font-size:14px;
}

</style>
