

  const menu = {
    state: {
      count: 0,
      activeName:"home",
      navBarOpenedStore:[]
    },
    mutations: {
      incrementMenu (state, payload) {
        state.count += payload.num;
      },
      changeactiveName(state,payload){
        state.activeName = payload.activeName;
      },
      savenavBarOpenedStore(state,payload){
        state.navBarOpenedStore = payload.navBarOpenedStore;
      }
    },
    actions: {
      incrementIfOddOnRootSum ({ state, commit, rootState }) { 
        console.log("当前模块的count:"+state.count);
          commit({
            type: 'incrementMenu',
            num: ( rootState.count)
          })
      }
    }
};

export default menu;