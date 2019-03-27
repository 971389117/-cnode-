<template>
  <div class="Header">
    <div class="header-inner">
    <img src="../assets/cnodejs_light.svg" alt="">
    <ul>
      <li><a href="#">首页</a></li>
      <li><a href="#">新手入门</a></li>
      <li><a href="#">API</a></li>
      <li><a href="#">关于</a></li>
      <li><a href="#">注册</a></li>
      <li><a href="#">登录</a></li>
    </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data () {
    return {

    };
  }
}
</script>
<style  scoped>
.header-inner{
  background: #333;
  display: flex;
  height: 40px;
  justify-content:  space-around;
  align-items: center;
}
img{
  height: 28.19px;
  width: 120px;
}
ul{list-style: none;display: flex;}
a{text-decoration: none;color:#fff;margin-left: 20px;}
</style>
