<template>
  <div class="SlideBar">
    <div class="user">
      <div class="topbar">作者</div>
      <div class="inner-user">
        <router-link class="avatar" :to='{
              name:"user_info",
              params:{author:author.loginname}
            }'>
          <img :src="author.avatar_url" alt="">
        </router-link>

        <span class="loginname">
          {{author.loginname}}
        </span>
        <span class="score">

          {{author.score}} 积分
        </span>
      </div>
    </div>
    <div class="user-topic">
      <div class="topbar">最近主题</div>
      <div class="inner-topic">
        <div class="last_cell" v-for="(top,index) in getTopicBy5" :key='index'>
          <router-link
            :to='{name:"topic",params:{id:top.id,name:top.author.loginname}}'>
            {{top.title}}
          </router-link>
        </div>
      </div>

    </div>
    <div class="user-replies">
      <div class="topbar">最近回复</div>
      <div class="inner-replies">
        <div class="last_cell" v-for="(replies,index) in getRepliesBy5"
          :key='index'>
          <router-link
            :to='{name:"topic",params:{id:replies.id,name:replies.author.loginname}}'>
            {{replies.title}}
          </router-link>
        </div>
      </div>


    </div>
  </div>
</template>
<script>
  export default {
    name: "SlideBar",
    data() {
      return {
        author: ''
      };
    },
    methods: {
      getUserInfo(author) {
        this.$http.get(`https://cnodejs.org/api/v1/user/${author}`)
          .then(res => {
            this.author = res.data.data
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    computed: {
      getTopicBy5() {
        if (this.author.recent_topics) {
          return this.author.recent_topics.splice(0, 5)
        }
      },
      getRepliesBy5() {
        if (this.author.recent_replies) {
          return this.author.recent_replies.splice(0, 5)
        }
      }
    },
    beforeMount() {
      this.getUserInfo(this.$route.params.name)
    }
  }

</script>
<style scoped>
  .SlideBar {
    margin-top: 13px;
    margin-left: 13px;
  }

  .user,
  .user-topic,
  .user-replies {
    background: #fff;
    font-size: 14px;
    /* padding: 10px; */
  }

  .inner-user,
  .inner-topic,
  .inner-replies {
    padding: 10px;
  }

  .topbar {
    background: #f6f6f6;
    font-size: 13px;
    padding: 10px;
  }

  .avatar img {
    width: 48px;
    height: 48px;
  }

  a {
    text-decoration: none;

  }

</style>
