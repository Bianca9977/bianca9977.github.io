<template>
  <div class="web_container" id="webContainer">
    <VideoTrailer />
    <NavBar/> 
    <GameStory/>
    <Features/>
    <Screenshots/>
    <Contact/>
    <Transition />
    <div v-if="showTopBtn" @click="goToTop" class="backToTopBtn">
      <button class="font-bold">TOP</button>
    </div>
    <div class="img-overlay" @click="closeOverlay" :class="zoomImage ? 'flex' : 'hidden'">
      <img id="zoomedImage"   />
    </div>
  </div>
</template>

<script setup>
import VideoTrailer from '../components/VideoTrailer.vue';
import GameStory from '../components/GameStory.vue';
import Features from '../components/Features.vue';
import Screenshots from '../components/Screenshots.vue';
import EasterEggs from '../components/EasterEggs.vue';
import Contact from '../components/Contact.vue';
import NavBar from '../components/NavBar.vue';
import Transition from '../components/Transition.vue';
import { bus } from '../main';

export default {
  name: "Homepage",
  components: {VideoTrailer, GameStory, Features, Screenshots, Contact, NavBar, Transition},
  data() {
      return {
        skippedVideo: false,
        showTopBtn: false,
        zoomImage: false,    
      }
  },

  mounted: function() {
    var self = this;

    bus.$on('skipVideo', function() {
    
      self.skippedVideo = true;
      document.getElementById('webContainer').classList.add('show-content');

      document.getElementById('gamestory').classList.add('slide-in-animation');
      document.getElementById('navbar').classList.add('increaseOpacity-transition');

      setTimeout(() => {
        document.getElementById('gamestory').classList.remove('slide-in-animation');
        document.getElementById('navbar').classList.remove('increaseOpacity-transition');
      }, 2000);

    });

    bus.$on('transitionSections', function() {
      self.loopToTop();
    });

    bus.$on('openPhoto', function(image) {
      var element = document.getElementById('zoomedImage');
      element.src = image;
      self.zoomImage = true;
    })

    document.addEventListener('scroll', function(e) {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        self.showTopBtn = true;
      }
      else {
        self.showTopBtn = false;
      }
    });

  },

  methods: {
    goToTop: function() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },

    loopToTop: function() {
      window.scrollTo({
        top: 0,
        behavior: "auto"
      });

      document.getElementById('gamestory').classList.add('slide-in-animation');
      document.getElementById('navbar').style.visibility = 'hidden';

      setTimeout(() => {
        document.getElementById('navbar').style.visibility = 'visible';
        document.getElementById('navbar').classList.add('increaseOpacity-transition');
      }, 1500); 

      setTimeout(() => {
        document.getElementById('gamestory').classList.remove('slide-in-animation');
        document.getElementById('navbar').classList.remove('increaseOpacity-transition');
      }, 2000);

    },

    closeOverlay: function() {
      var self = this;

      self.zoomImage = false;
    }
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

.img-overlay {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0, .75);
  justify-content: center;
  align-items: center;
}
</style>
