<template>
  <div>
    <p>Welcome home</p>
    vuex实现计算：{{count}}
    <button @click="add">同步add10</button>
    <button @click="addAsync">异步add10</button>
    menu的counter：{{countMenu}}
    <button @click="IncrementMenu">模块add</button>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {
    count() {
      return this.$store.state.count;
    },
    countMenu(){
      return this.$store.state.menu.count;
    }
  },
  methods: {
    //dispatch 一个action , action里面commit一个mutation,mutation修改store,
    //也可以直接commit一个mutation
    //action里面的方法可以异步的commit一个mutation,直接commit一个mutation方法，mutation方法是同步的
    add() {
      //直接commit一个mutation
      this.$store.commit({
        type: "increment",
        num: 10,
      });
      // this.$store.commit('increment',{
      //   num: 10
      // })
    },
    addAsync() {
      //通过dipatch一个action
      this.$store.dispatch({
        type: "incrementAsync",
        amount: 10,
      });
    },
    IncrementMenu (){
      this.$store.dispatch('incrementIfOddOnRootSum')
    },
  },
};
</script>