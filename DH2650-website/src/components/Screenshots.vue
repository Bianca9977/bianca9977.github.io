<template>
    <section id="screenshots" class = "screenshots">
        <div data-aos="fade-up" data-aos-duration="1500" class="container mx-auto py-2 px-8 md:px-4 2xl:px-0 h-full flex flex-col justify-center">
            <h3 class="text-4xl xl:text-6xl text-center">
                Gallery
            </h3>
            <br>
            <!-- i think it would be nice to make the screenshots section a horizontal scrolling image carousel, i'll look into that next -->
            <!--<div class="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-16">
                <div v-for="(image, index) in screenshots" :key="index">
                    <img :src="image.photo" :alt="image.name">
                </div>
            </div>-->
            <div class="mt-16">
                <VueSlickCarousel v-bind="settings">
                    <div v-for="(image, index) in screenshots" :key="index" class="screenshot">
                        <img :src="image.photo" :alt="image.name" :width="450" :height="450" @click="openPhoto(image.photoBig)">
                    </div>
                </VueSlickCarousel>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { bus } from '../main';
    import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    // optional style for arrows & dots
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
 
    export default {
        name: 'MyComponent',
        components: { VueSlickCarousel },
        data() {
            return {
            settings: {
                "centerMode": true,
                "centerPadding": "30px",
                "focusOnSelect": true,
                "infinite": true,
                "slidesToShow": 3,
                "speed": 500,
                "responsive": [
                    {
                        "breakpoint": 1024,
                        "settings": {
                            "slidesToShow": 1,
                        }
                    }
                ]
            },
            currentElement: null,
            screenshots: [
                {
                    photo: require('../assets/screenshots/s1.jpg'),
                    photoBig: require('../assets/screenshots/s1_big.jpg')
                },
                {
                    photo: require('../assets/screenshots/s2.jpg'),
                    photoBig: require('../assets/screenshots/s2_big.jpg')
                },
                {
                    photo: require('../assets/screenshots/s3.jpg'),
                    photoBig: require('../assets/screenshots/s3_big.jpg')
                },
                {
                    photo: require('../assets/screenshots/s4.jpg'),
                    photoBig: require('../assets/screenshots/s4_big.jpg')
                },
                {
                    photo: require('../assets/screenshots/s5.jpg'),
                    photoBig: require('../assets/screenshots/s5_big.jpg')
                },
                {     
                    photo: require('../assets/screenshots/s6.jpg'),
                    photoBig: require('../assets/screenshots/s6_big.jpg')
                },
            ]
            };
        },

        created: function() {
            var self = this;

        },

        methods: {
            openPhoto: function(image) {
       
                bus.$emit("openPhoto", image);
            }
        }
    }

</script>


<style scoped>

</style>