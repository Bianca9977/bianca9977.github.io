<template>
  <div class="web_container" id="webContainer">
    <VideoTrailer />
    <NavBar/> 
    <GameStory/>
    <Features/>
    <EasterEggs/>
    <Contact/>
  </div>
</template>

<script setup>
import VideoTrailer from '../components/VideoTrailer.vue';
import GameStory from '../components/GameStory.vue';
import Features from '../components/Features.vue';
import EasterEggs from '../components/EasterEggs.vue';
import Contact from '../components/Contact.vue';
import NavBar from '../components/NavBar.vue';
import { bus } from '../main';

export default {
  name: "Homepage",
  components: {VideoTrailer, GameStory, Features, EasterEggs, Contact, NavBar},
  data() {
      return {
        skippedVideo: false,
      }
  },

  mounted: function() {
    bus.$on('skipVideo', function() {
    
      this.skippedVideo = true;
        document.getElementById('webContainer').classList.add('show-content');
    })
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}

.web_container { 
  overflow: hidden;
  height: 100vh;

  &.show-content {
    overflow: auto;
    height: auto;
  }
}
</style>
