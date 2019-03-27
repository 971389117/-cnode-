<template>
  <div id="app">
    <Header/>
    <PostList/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import PostList from '@/components/PostList'

export default {
  name: 'App',
  components:{
    PostList,
    Header,
  }
}
</script>

<style>
*{padding: 0;margin: 0;box-sizing: border-box}
body{
  background: #e1e1e1;
}
</style>
