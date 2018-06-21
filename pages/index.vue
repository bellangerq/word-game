<template lang="html">
  <main>
    <Modal v-if="$store.state.modal.start || $store.state.modal.end"/>
    <Header />
    <section>
      <Countdown />
      <p class="word">{{ $store.state.currentWord }}</p>
      <input
        ref="inputField"
        v-model="userInput"
        :class="{ 'has-error': $store.state.hasError }"
        @input="handleAnswer"
        type="text"
        placeholder="Type the word above"
      >
      <p class="error" v-if="$store.state.hasError">Oops...</p>
    </section>
  </main>
</template>

<script type="text/javascript">
import Header from '~/components/Header.vue'
import Modal from '~/components/Modal.vue'
import Countdown from '~/components/Countdown.vue'

export default {
  components: {
    Header,
    Modal,
    Countdown
  },
  computed: {
    wordIsGood() {
      return this.$store.state.currentWord === this.$store.state.userInput
    },
    canLevelUp() {
      return this.$store.state.wordsInARow === this.$store.state.level.requiredWords
    },
    userInput: {
      get () {
        return this.$store.state.userInput.toLowerCase()
      },
      set (value) {
        this.$store.commit('UPDATE_USER_INPUT', value.toLowerCase())
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
        this.updateStreaks()
      }

      // On level-up
      if (this.canLevelUp) {
        this.$store.commit('RESET_WORDS_IN_A_ROW')
        this.$store.commit('INCREMENT_LEVEL')
        this.$store.commit('INCREMENT_REQUIRED_WORDS')
        this.$store.commit('INCREMENT_WORDS_PER_MINUTE')
        this.$store.commit('SET_TIMER')
      }
    },
    showNextWord() {
      this.$store.commit('SET_CURRENT_WORD')
      this.$store.commit('UPDATE_USER_INPUT', '')
      this.$store.commit('INCREMENT_WORDS_IN_A_ROW')
      this.$store.commit('SET_TIMER')
    },
    checkForErrors() {
      this.$store.commit('SET_ERROR', false)

      if (!this.$store.state.currentWord.startsWith(event.target.value)) {
        this.$store.commit('SET_ERROR', true)
      }
    },
    updateStreaks() {
      this.$store.commit('INCREMENT_CURRENT_STREAK')

      if (this.$store.state.currentStreak > this.$store.state.highestStreak) {
        this.$store.commit('SET_HIGHEST_STREAK', this.$store.state.currentStreak)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/vars.scss';

section {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 0;

  .word {
    color: $color-black;
    font-size: 2rem;
    margin: 50px 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    @media (min-width: 600px) {
      font-size: 3rem;
    }
  }

  input[type="text"] {
    border: 3px solid $color-gray;
    border-radius: 5px;
    font-size: 1.5rem;
    font-family: $font-sans;
    max-width: 300px;
    padding: 5px;
    text-align: center;
    transition: border-color 0.3s ease-in-out;
    width: 100%;

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
