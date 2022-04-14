import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    postList: [
      {id: 1, title: "첫 번째 제목", content: '작성내용 1', views: 0},
      {id: 2, title: "두 번째 제목", content: '작성내용 2', views: 0}
    ],
    views: 0
  },
  getters: {
  },
  mutations: {
    addMemo: function(state, content) {
      const id = state.postList.length+1;
      state.postList.push(
        {
          id: id, 
          content: content
        }
      )
    },
    addViews(state) {
      state.views++;
    }
  },
  actions: {
  },
  modules: {
  }
})
