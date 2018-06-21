<template lang="html">
  <div class="modal-layer">
    <div v-if="$store.state.modal.start" class="modal-content">
      <h2>Welcome on this Word Game 💬</h2>

      <h3>Game's rules</h3>
      <p>You have to fill the text input with the word just above it before the time is up. The game becomes harder over the levels. Good luck!</p>

      <h3>About this project</h3>
      <p><a href="https://quentin-bellanger.com" target="_blank" rel="noopener">I</a> made this game to train up my Vue.js and Nuxt.js skills. Code is available on <a href="https://github.com/bellangerq/word-game" target="_blank" rel="noopener">GitHub</a>.</p>

      <h3>Ready to play?</h3>
      <p>Warm your fingers before you click...</p>
      <button @click="launchGame" class="button" type="button" name="button">Play</button>
    </div>
    <div v-if="$store.state.modal.end" class="modal-content">
      <h2>Time's up ⏰</h2>

      <h3>Results</h3>
      <p>Max level: <span>{{ $store.state.level.number }}</span></p>
      <p>Highest streak: <span>{{ $store.state.highestStreak }}</span> words</p>

      <h3>Try again?</h3>
      <p>Do you think you can make a better score? Feel free to restart a game.</p>
      <button @click="resetGame" class="button" type="button" name="button">Replay</button>

      <h3>Invite friends</h3>
      <p>Share your highest score with your friend and invite them to play.</p>
      <a class="button" :href="twitterLink" target="_blank" rel="noopener">Tweet</a>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  computed: {
    twitterLink() {
      return `https://twitter.com/home?status=I%20reached%20level%20${this.$store.state.level.number}%20in%20Vue%20Word%20Game%3A%20https%3A//vue-word-game.surge.sh`
    }
  },
  methods: {
    focusInput() {
      this.$parent.$refs.inputField.focus()
    },
    launchGame() {
      this.$store.commit('TOGGLE_START_SCREEN')
      this.$store.commit('SET_TIMER')
      this.$store.commit('DECREMENT_TIMER')
      this.focusInput()
    },
    resetGame() {
      // Handle modals
      this.$store.commit('TOGGLE_END_SCREEN')
      this.$store.commit('TOGGLE_START_SCREEN')

      // Reset input and currentWord
      this.$store.commit('SET_CURRENT_WORD')
      this.$store.commit('UPDATE_USER_INPUT', '')

      // Reset error
      this.$store.commit('SET_ERROR', false)

      // Reset leveling
      this.$store.commit('SET_INITIAL_LEVEL')

      // Reset current streak
      this.$store.commit('RESET_CURRENT_STREAK')
    }
  }
}
</script>

<style lang="scss">
@import '../assets/stylesheets/vars.scss';

.modal-layer {
  align-items: center;
  background: rgba($color-black, 0.2);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 100%;

  .modal-content {
    background: $color-white;
    border: 3px solid $color-main;
    border-radius: 5px;
    margin: 0 auto;
    padding: 25px;
    width: 600px;

    h2 {
      font-size: 1.75rem;
      text-align: center;
    }

    h3 {
      border-bottom: 1px solid $color-gray;
      color: $color-gray;
      margin: 25px 0;
      padding: 0 0 12.5px 0;
    }

    .button {
      background: $color-main;
      border-bottom: 3px solid darken($color-main, 5%);
      border-radius: 5px;
      color: $color-white;
      display: inline-block;
      font-size: 1rem;
      font-family: $font-sans;
      margin-top: 25px;
      padding: 12.5px 25px;
      text-transform: uppercase;
      min-width: 150px;
      text-align: center;
      text-decoration: none;
      -webkit-appearance: none;

      &:hover,
      &:focus {
        background: darken($color-main, 5%);
        border-bottom-color: transparent;
        color: $color-white;
        outline: 0;
      }

      + .button {
        margin-left: 25px;
      }
    }

    p {
      a {
        color: $color-main;
        text-decoration: none;

        &:hover,
        &:focus {
          color: darken($color-main, 5%);
          outline: none;
        }
      }

      span {
        color: $color-main;
      }
    }
  }
}
</style>
