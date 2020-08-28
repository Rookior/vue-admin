 
<template>
<div>
   <div v-for="(item,index) in routes" v-bind:key="index" >
     <div v-if="!item.hidden" >
       <div v-if="!item.children" class="parent" v-bind:class="{ active:  item.name == activeName }" >
          <!-- <router-link class="a" v-bind:to="item.path" > {{item.meta.title}}</router-link> -->

          <div @click="changeRouter(item.path,item.name)">{{item.meta.title}} </div>
        </div>
        <div v-else>
            <div v-bind:to="item.path" @click.stop="openNavBar(index)" class="parent" > {{item.meta.title}}</div>
             <div v-show="navBarOpenedStore[index]">
              <div  v-for="child in item.children"  class="child" v-bind:class="{ active:  child.name == activeName }"              
                      :key="child.path"
                      >
                         <div @click="changeRouter(child.path,child.name)">{{child.meta.title}} </div>
                         <!-- <router-link v-bind:to="child.path" v-if="!child.hidden"  > {{child.meta.title}}</router-link> -->
                     
                       
              </div>
            </div>
        </div>

     </div>
   </div>
</div>
  
</template>

<script>
import { RouterConfig } from '../router/index';
export default {
  name: 'pageMenu',
  props: {
    
  },
  data(){
    return{
       navBarOpened:[],
      // activeName:"home",
    }
  },
  computed: {
    routes() {
      return RouterConfig.routes
    },
    // 将路由用到的数据存储
    activeName(){
      return this.$store.state.menu.activeName;
    }, 
    navBarOpenedStore(){
      return this.$store.state.menu.navBarOpenedStore;
    }
     
  },
  methods:{
    openNavBar(index){
    
      // 数组长度变化时不会触发数据自动更新
      this.navBarOpened[index] = !this.navBarOpened[index];
      // 使用变异方法 push() pop() shift() unshift() splice() sort() reverse()
      this.navBarOpened.reverse().reverse();
      // 用Vue中的方法Vue.set
      // var flag = !this.navBarOpened[index]
      // this.$set(this.navBarOpened,index,flag)

       //将路由数据存储
       this.$store.commit({
        type: "savenavBarOpenedStore",
        "navBarOpenedStore": this.navBarOpened,
      });

      
    },
    changeRouter(url,name){
     
      // this.activeName = name;
      //修改页面数据为store存储
       this.$store.commit({
        type: "changeactiveName",
        activeName: name,
      });

      
      this.$router.push({path:url})
    }
  }
}

</script>

<style scoped>
div{
  cursor: pointer;
  color: #fff;
  text-align: left;
}
.parent{
  text-indent: 2em;
  background: #000;
  border: 2px solid #ccc;
}
.child{
  text-indent: 4em;
  background: #8f8f8f;
}
.active{
  background: #f00;
}
</style>
