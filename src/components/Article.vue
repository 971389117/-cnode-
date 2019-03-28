<template>
  <div class="Article">
    <div class="topic">
      <div class="top">
        <h2>{{post.title}}</h2>
        <div class="tail">
          <ul>
            <li>*发布于 {{post.last_reply_at | formatDate}}</li>
            <li>*作者 {{post.author.loginname}}</li>
            <li>*{{post.visit_count}} 次浏览</li>
            <li>*来自 {{post | formatData}}</li>
          </ul>
        </div>

      </div>

      <div  v-html='post.content' class="down markdown-body">
      </div>
    </div>


    <div class="replies">
      <div class="toobar">
        <span class="replies_count">{{post.reply_count}}回复</span>
      </div>
      <div class="replie-inner">
      <div class="replie-cell" v-for='(replie,index) in post.replies' :key='index'>
        <div class="author_content">
          <img :src="replie.author.avatar_url" alt="">
          <div>  <span>{{replie.author.loginname}}</span>

          <span>{{index+1}}楼</span></div>


        </div>
        <div class="markdown-text" v-html="replie.content">

        </div>
</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "Article",
    data() {
      return {
        post: {}
      };
    },
    methods: {
      getPost() {
        // 'https://cnodejs.org/api/v1/topic/',{
        //   params:{
        //     id:this.$route.params.id
        //   }
        // }
        this.$http.get(
            `https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
          .then(res => {
            this.post = res.data.data
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    beforeMount() {
      this.getPost()
    },
  }

</script>
<style>
  @import url('../assets/markdown-github.css');

  ul {
    display: flex;
    list-style: none;
  }

  li {
    margin-left: 20px;
    font-size: 13px;
    color: #8f8f8f;
    text-decoration: none;
  }

  .Article {
    max-width: 1100px;
    /* margin: auto; */

    margin-top: 13px;
  }

  .topic {
    background: #fff;
    margin: auto;
    border-radius: 3px;
  }
  .replies{
    margin-top: 13px;
  }
  .top,
  .down,
  .toobar {
    padding: 10px;
    box-shadow: 0 0 4 rgba(0, 0, 0, .24)
  }

  .top {
    border-bottom: 1px solid #cfcfcf;
  }

  .tail {
    margin: 10px 0 0;
  }

  p {
    margin-bottom: 15px
  }

  .toobar {
    background: #f6f6f6;
  }
  .author_content{
    font-size: 12px;
    height: 21px;
    vertical-align: top;
  }
  .author_content img {
    height: 30px;
    width: 30px;
    float: left;
  }


  .replie-inner{
    background: #fff;
  }
  .replie-cell{
    padding: 10px;
    border-bottom: 1px solid #f6f6f6;
  }
  .markdown-text{
    padding-left: 20px;
  }
  .author_content div{
    display: inline-block;
    margin-left: 10px;
  }
  a{
    color:#08c;
  }
  #content{
    font-size: 16px;
  }
</style>
