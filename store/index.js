import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      words: {},
      currentWord: '',
      userInput: '',
      hasError: false,
      level: 1,
      requiredWords: 5,
      wordsPerMinute: 30,
      timer: 2000,
      wordsInARow: 0
    },
    mutations: {
      SET_WORDS: (state, words) => {
        state.words = words
      },
      SET_CURRENT_WORD: (state, word) => {
        state.currentWord = state.words[Math.floor(Math.random() * state.words.length)]
      },
      UPDATE_USER_INPUT: (state, value) => {
        state.userInput = value
      },
      INCREMENT_LEVEL: (state) => {
        state.level ++
      },
      INCREMENT_REQUIRED_WORDS: (state) => {
        state.requiredWords ++
      },
      INCREMENT_WORDS_PER_MINUTE: (state) => {
        state.wordsPerMinute ++
      },
      UPDATE_TIMER: (state, value) => {
        state.timer = value
      },
      INCREMENT_WORDS_IN_A_ROW: (state) => {
        state.wordsInARow ++
      },
      RESET_WORDS_IN_A_ROW: (state) => {
        state.wordsInARow = 0
      }
    },
    actions: {
      async nuxtServerInit ({ commit }, { app }) {
        const words = []

        // Fetch words
        const url = 'https://api.datamuse.com/words?ml=chicken&sp=*'
        const result = await app.$axios.$get(url)
        result.forEach(word => {
          words.push(word.word)
        })

        // Initialize store's data
        commit('SET_WORDS', words)
        commit('SET_CURRENT_WORD')
      }
    }
  })
}

export default createStore
