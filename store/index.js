import Vuex from 'vuex'

const initialLevel = {
  number: 1,
  requiredWords: 5,
  wordsPerMinute: 15
}

const createStore = () => {
  return new Vuex.Store({
    state: {
      modal: {
        start: true,
        end: false
      },
      words: {},
      currentWord: '',
      userInput: '',
      hasError: false,
      level: initialLevel,
      timer: 0,
      wordsInARow: 0,
      highestStreak: 0,
      currentStreak: 0
    },
    mutations: {
      SET_INITIAL_LEVEL: state => {
        state.level = initialLevel
      },
      TOGGLE_START_SCREEN: state => {
        state.modal.start = !state.modal.start
      },
      TOGGLE_END_SCREEN: state => {
        state.modal.end = !state.modal.end
      },
      SET_WORDS: (state, words) => {
        state.words = words
      },
      SET_CURRENT_WORD: (state, word) => {
        state.currentWord = state.words[Math.floor(Math.random() * state.words.length)]
      },
      UPDATE_USER_INPUT: (state, value) => {
        state.userInput = value
      },
      SET_ERROR: (state, value) => {
        state.hasError = value
      },
      INCREMENT_LEVEL: state => {
        state.level.number ++
      },
      INCREMENT_REQUIRED_WORDS: state => {
        state.level.requiredWords ++
      },
      INCREMENT_WORDS_PER_MINUTE: state => {
        state.level.wordsPerMinute ++
      },
      SET_TIMER: state => {
        state.timer = 60 / state.level.wordsPerMinute
      },
      DECREMENT_TIMER: state => {
        if (state.timer <= 0.1) {
          state.timer = 0
          return
        }
        state.timer = state.timer - 0.1
      },
      INCREMENT_WORDS_IN_A_ROW: state => {
        state.wordsInARow ++
      },
      RESET_WORDS_IN_A_ROW: state => {
        state.wordsInARow = 0
      },
      INCREMENT_CURRENT_STREAK: state => {
        state.currentStreak ++
      },
      RESET_CURRENT_STREAK: state => {
        state.currentStreak = 0
      },
      SET_HIGHEST_STREAK: (state, value) => {
        state.highestStreak = value
      }

    },
    actions: {
      async nuxtServerInit ({ commit }, { app }) {
        const words = []

        // Fetch words
        const requestedWordsNumber = 1000
        const url = `https://apifort-random-word-v1.p.mashape.com/v1/generate/randomword?count=${requestedWordsNumber}`
        const config = {
          headers: {
            'X-Mashape-Key': 'bipAC44YJSmshAkmIyAnNxhxYB7vp18ZCIejsnRCAiPKID3Pv6',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Accept-Encoding': 'gzip'
          }
        }

        const result = await app.$axios.get(url, config)
        const requestedWords = result.data.result

        requestedWords.forEach(word => {
          if (word.length <= 8) {
            words.push(word)
          }
        })

        // Initialize store's data
        commit('SET_WORDS', words)
        commit('SET_CURRENT_WORD')
        commit('SET_TIMER')
      }
    }
  })
}

export default createStore
