<template>
  <div id="app">
    <div class="pageHeader">
       <pageHeader msg="pageHeader"/>
    </div>
    <div class="flex">
       <div class="pageMenu">
          <pageMenu />
      </div>
      <div class="pageContent">
         <router-view/>
      </div>
      
    </div>
  </div>
</template>

<script>
import pageHeader from './components/pageHeader.vue'
import pageMenu from './components/pageMenu.vue'
export default {
  name: 'App',
  components: {
    pageHeader,
    pageMenu
  },
  // 页面刷新前保存store
  created () {
    // 在页面加载时读取sessionStorage
    if (sessionStorage.getItem('store')) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem('store'))))
    }
    // 在页面刷新时将store保存到sessionStorage里
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('store', JSON.stringify(this.$store.state))
    })
  }
}
</script>

<style>
body{
  margin:0;
  padding:0;
}
#app {
  margin:0;
  padding:0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.pageHeader{
  background: #ccc;
}
.flex{
  display:flex;
}
.pageMenu{
  width:20%;
 background: #ccc;
}
.pageContent{
  width:80%;
  background:#0f0
}
</style>
