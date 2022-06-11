<template>
  <div class="app">
    <div v-if="state.account.id">안녕하세요? {{ state.account.name }}님!</div>
    <div v-else>
      <label for="loginId">
        <span>아이디</span>
        <input type="text" id="loginId" v-model="state.form.loginId"/>
      </label>
      <label for="loginPw">
        <span>비밀번호</span>
        <input type="text" id="loginPw" v-model="state.form.loginPw"/>
      </label>
      <hr>
      <button @click="submit()">로그인</button>
    </div>
  </div>

</template>

<script>
//npm i axios =  (서버통신)설치

import axios from "axios";
import {reactive} from "vue";

export default {
  setup() {
    const state = reactive({
      account: {
        id: null,
        name: ""
      },
      form: {
        loginId: "",
        loginPw: ""
      },
      loggedIn: false
    });

    const submit = () => {
      const args = {
        loginId: state.form.loginId,
        loginPw: state.form.loginPw
      }
      axios.post("/api/account", args).then((res)=>{
        alert("로그인에 성공했습니다.");
        state.account = res.data;
      });

    }

    /*
    * cors err => 다른서버 통신시 그냥하면 cross domain 에러가 생긴다 (8080 => 3000)
    * proxy사용 vue.config
    * */
    axios.get("/api/account").then((res) => {
      state.account = res.data;
    });

    return {state, submit}
  },
}
</script>