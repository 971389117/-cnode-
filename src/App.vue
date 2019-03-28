<template>
  <div id="app">
    <Header/>
    <div class="main">
    <router-view name='main'></router-view>
    <router-view name='slidebar'></router-view>
    </div>
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
.main{
  display: flex;
  justify-content: center;
  margin: auto;
}
</style>
