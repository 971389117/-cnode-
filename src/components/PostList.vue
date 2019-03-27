<template>
  <div class="PostList">
    <div class="panel">
      <header>
        <ul>
          <li>全部</li>
          <li>精华</li>
          <li>分享</li>
          <li>问答</li>
          <li>招聘</li>
          <li>客户端测试</li>
        </ul>
      </header>
      <div class="panel-inner">
        <div v-for="post in posts" :key='post.id' class="cell">
          <router-link class="title-avatar" :to='{
              name:"abc",
              params:{}
            }'>
            <img :src="post.author.avatar_url" alt="">
          </router-link>
          <span class="counts"> {{post.reply_count}} / {{post.visit_count}}</span>
          <router-link class="title" :to='{
              name:"abc",
              params:{}
            }'>
            {{post.title}}
             </router-link>
            <router-link class="title-date" :to='{
              name:"abc",
              params:{}
            }'>
            {{ post.last_reply_at | formatDate}}
             </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "PostList",
    data() {
      return {
        base_url: 'https://cnodejs.org/api/v1',
        posts: [],
      };
    },
    methods: {
      getTopic() {
        this.$http.get(this.base_url + '/topics', {
            params: {
              limit: 20,
              page: 1
            }
          })
          .then(res => {
            this.posts = res.data.data
            console.log(this.posts)
          }).catch(err => {
            console.log(err)
          })
      }
    },
    beforeMount() {
      this.getTopic()
    },
  }

</script>
<style scoped>
 .PostList{
  margin-top: 20px;
  position: relative;
  top:20px;
  max-width: 960px;
  margin: auto;
}
.panel{
  box-shadow: 0 0 4px rgba(0, 0, 0, .24)
}

img{width: 30px;height: 30px;}
a{text-decoration: none;color: #333}
.cell{
  border-top: 1px solid #eee;
  background: #fff;
  padding: 10px;
  vertical-align: center;
}
.cell>*{
  vertical-align: center;
}
header>ul{
  display: flex;
  list-style: none;
  background: #f6f6f6;
  font-size: 14px;
  padding: 4px 0;
}
header>ul>li{
  padding: 2px 4px;
  margin: 0 10px;
}
.title-date{
  float: right;
}
.counts{
  text-align: center;
  display: inline-block;
  width: 130px;
  font-size: 13px;
}
.title{
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
