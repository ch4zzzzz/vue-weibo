<template>
  <div id="login">
    <div id="login-form">
      <h1 id="login-title">加入微博</h1>
      <mt-field label="username" v-model="username"></mt-field>
      <mt-field label="password" v-model="password" type="password"></mt-field>
      <mt-button id="login-button"
          type="primary" size="large"
          @click.stop="login">
        登录
      </mt-button>
    </div>
  </div>
</template>

<script>
import {login as loginUrl} from '@/request-api/api.js'

export default {
  name: 'Login',
  data () {
    return {
      username: "",
      password: "",
    }
  },

  methods: {
    login () {
      const username = this.username;
      const password = this.password;
      axios
        .post(login, {
          username,
          password
        })
        .then(res => {
          this.handleLoginResponse(res);
        })
    },

    handleLoginResponse (res) {
      const data = res.data;
      if (data && data.success === 'true') {
        this.$router.replace('/');
        return Promise.resolve(true);
      } else {
        return Promise.reject(false);
      }
    }
  }
}
</script>

<style scoped="scoped">
#login {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

#login-form {
  height: 50%;
  width: 100%;
  display: block;
  text-align: center;
}

#login-button {
  margin-top: 1rem;
}
</style>

