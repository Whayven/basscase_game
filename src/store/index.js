import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Selected character
    selCharacter: "",
    // Characters obtained
    recCharacters: [],
    // Characters remaining
    remCharacters: []
  },
  getters: {
    character: state => state.selCharacter,
    recruited: state => state.recCharacters,
    remaining: state => state.remCharacters
  },
  mutations: {
    setCharacter: (state, character) => (state.selCharacter = character),
    setRecruited: (state, characters) => (state.recCharacters = characters),
    setRemaining: (state, characters) => (state.remCharacters = characters)
  },
  actions: {
    selectCharacter({ commit }, character) {
      commit("setCharacter", character);
    },
    setRemCharacters({ commit }, characters) {
      commit("setRemaining", characters);
    }
  },
  
})
