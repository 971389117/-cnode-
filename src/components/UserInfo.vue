<template>
  <div class="UserInfo">
    <div class="main">
      <div class="toobar">主页 /</div>
      <div class="inner-main">
      <span class="avatar">
        <img :src="authro.avatar_url" alt="">
      </span>
      <span class="loginname">
        {{authro.loginname}}
      </span>
       <br>
      <span class="score">

      {{authro.score}} 积分 <br>
            </span>
      <span class="create_at">
        注册于 {{authro.create_at | formatDate}}
      </span>
    </div></div>
    <p>最近创建的话题</p>
    <div class="recent_topics">
      <div class="cell" v-for='(top,index) in authro.recent_topics'
        :key='index'>
        <span class="img">
        <img :src="top.author.avatar_url" alt="">
        </span>
        <span class="title">
        <router-link :to='{name:"topic",params:{
          id:top.id
        }}' >
        {{top.title}}
        </router-link>
        </span>
        <span class="last_at">
        {{top.last_reply_at | formatDate}}

        </span>
      </div>
    </div>
    <p>最近参与的话题</p>
    <div class="recent_replies">
      <div class="cell" v-for='(replies,index) in authro.recent_replies'
        :key='index'>
        <span class="img">
        <img :src="replies.author.avatar_url" alt="">

        </span>
<span class="title">
          <router-link :to='{name:"topic",params:{
          id:replies.id
        }}' >
        {{replies.title}}

        </router-link>

</span>
<span class="last_at">
        {{replies.last_reply_at | formatDate}}

</span>
      </div>

    </div>

    <br>
    <br>
  </div>
</template>
<script>
  export default {
    name: "UserInfo",
    data() {
      return {
        authro: ''
      };
    },
    methods: {
      getUserInfo(author) {
        this.$http.get(`https://cnodejs.org/api/v1/user/${author}`)
          .then(res => {
            this.authro = res.data.data
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    beforeMount() {
      this.getUserInfo(this.$route.params.author)
      console.log(this.$route.params.author)
    }

  }

</script>
<style scoped>
  .UserInfo {
    margin: auto;
  }
  .UserInfo,.recent_topics,.recent_replies{
    padding: 10px;
    border-radius: 3px;
    min-width: 800px;
  }
  img {
    width: 30px;
    height: 30px;
  }

  p {
    margin: 5px 0;
  }

  .UserInfo>div {
    background: #fff;
    /* margin: 15px 0; */
    box-shadow: 0 0 4px rgba(0, 0, 0, .24);
  }
  .main{
    display: block;
    color:#787878;
    font-size: 13px;
    vertical-align: top;
  }
  .inner-main{
    padding: 10px;
  }
  .loginname{
    vertical-align: top;
  }
  .main span img{
    width: 45px;
    height: 45px;
  }
  .toobar{
    padding: 10px;
    color: #80bd01;
    background: #f6f6f6;
  }
  .cell {
    border-bottom: 1px solid #f1f1f1;
    line-height: 40px;
  }
  .title{
    vertical-align: 12px;
    /* line-height: 40px; */
    margin-left: 15px;
  }
  .last_at{
    float: right;
  }
  a{
    text-decoration: none;
    color:rgb(38, 155, 201);
  }
</style>
