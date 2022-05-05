<template>
  <div class="web_container">
    <NavBar/>
    <GameStory/>
    <Features/>
    <EasterEggs/>
    <Contact/>
  </div>
</template>

<script setup>
import GameStory from '../components/GameStory.vue';
import Features from '../components/Features.vue';
import EasterEggs from '../components/EasterEggs.vue';
import Contact from '../components/Contact.vue';
import NavBar from '../components/NavBar.vue';

export default {
  name: "Homepage",
  components: {GameStory, Features, EasterEggs, Contact, NavBar},
}
</script>

<style scoped>
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
</style>
