<template>
  <div id="login">
    <div id="login-form">
      <h1 id="login-title">加入微博</h1>
      <cus-field label="username" v-model="username"></cus-field>
      <cus-field label="password" v-model="password" type="password"></cus-field>
      <button id="login-button"
          
          @click.stop="login">
        登录
      </button>
    </div>
  </div>
</template>

<script>
import {login as loginUrl} from '@/request-api/api.js'
import { mapActions, mapMutations } from 'vuex';

export default {
  name: 'Login',
  components: {
    'cus-field': () => import('@/components/common/cus-field.vue')
  },
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
      this.$axios
        .post('login', {
          username,
          password
        })
        .then(res => {
          this.handleLoginResponse(res);
        })
        .catch(err => {
          console.log(err)
        })
    },

    handleLoginResponse (res) {
      if (res.status === 200) {
        const data = res.data;
        const {uid, name, avatar} = data.user;
        this.setUser({uid, name, avatar});
        this.setAuthority(2);
        const {token} = data;
        this.setUserToken(token);
        this.$router.replace('/');
        return Promise.resolve(true);
      } else {
        return Promise.reject(false);
      }
    },

    ...mapMutations([
      'setAuthority',
      'setUser',
      'setUserToken'
    ])
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

