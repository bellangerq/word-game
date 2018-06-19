<template lang="html">
  <main>
    <Header />
    <section>
      <Countdown />
      <p class="word">{{ $store.state.currentWord }}</p>
      <input v-model="userInput" :class="{ 'has-error': $store.state.hasError }" @input="handleAnswer" type="text" placeholder="Type the word above" autofocus>
      <p class="error" v-if="$store.state.hasError">Oops...</p>
    </section>
  </main>
</template>

<script type="text/javascript">
import Header from '~/components/Header.vue'
import Countdown from '~/components/Countdown.vue'

export default {
  components: {
    Header,
    Countdown
  },
  computed: {
    wordIsGood() {
      return this.$store.state.currentWord === this.$store.state.userInput
    },
    canLevelUp() {
      return this.$store.state.wordsInARow === this.$store.state.requiredWords
    },
    userInput: {
      get () {
        return this.$store.state.userInput
      },
      set (value) {
        this.$store.commit('UPDATE_USER_INPUT', value)
      }
    }
  },
  methods: {
    handleAnswer() {
      // Handle errors if any
      this.checkForErrors()

      // If word is good
      if (this.wordIsGood) {
        this.showNextWord()
      }

      // On level-up
      if (this.canLevelUp) {
        this.$store.commit('RESET_WORDS_IN_A_ROW')
        this.$store.commit('INCREMENT_LEVEL')
        this.$store.commit('INCREMENT_REQUIRED_WORDS')
        this.$store.commit('INCREMENT_WORDS_PER_MINUTE')
        this.$store.commit('UPDATE_TIMER', (60 / this.$store.state.wordsPerMinute) * 1000)
      }
    },
    showNextWord() {
      this.$store.commit('SET_CURRENT_WORD')
      this.$store.commit('UPDATE_USER_INPUT', '')
      this.$store.commit('INCREMENT_WORDS_IN_A_ROW')
      this.$store.commit('UPDATE_TIMER', (60 / this.$store.state.wordsPerMinute) * 1000)
    },
    checkForErrors() {
      this.$store.state.hasError = false

      if (!this.$store.state.currentWord.startsWith(event.target.value)) {
        this.$store.state.hasError = true
      }
    }
  }
}
</script>

<style lang="scss">
@import '../assets/stylesheets/vars.scss';

section {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 0;

  .word {
    color: $color-black;
    font-size: 48px;
    margin: 50px 0;
  }

  input[type="text"] {
    border: 3px solid $color-gray;
    border-radius: 5px;
    font-size: 24px;
    font-family: $font-sans;
    padding: 5px;
    text-align: center;
    transition: all 0.3s ease-in-out;

    &:focus {
      border-color: $color-main;
      outline: none;
    }

    &::placeholder {
      color: $color-gray-light;
    }

    &.has-error {
      border-color: $color-error;
    }
  }

  .error {
    margin-top: 5px;
  }
}
</style>
