 
<template>
<div>
   <div v-for="(item,index) in routes" v-bind:key="index">
        <router-link v-bind:to="item.path"> {{item.name}}</router-link>
   </div>
</div>
  
</template>

<script>
import { RouterConfig } from '../router/index';
export default {
  name: 'pageMenu',
  props: {
    
  },
  computed: {
    routes() {
      return RouterConfig.routes
    }
  }
}

</script>

<style scoped>

</style>
