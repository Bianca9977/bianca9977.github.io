<template>
    <section id="screenshots" class = "screenshots">
        <div class="container mx-auto p-5 h-full flex flex-col justify-center">
            <h3 class="xl:text-6xl text-center">
                Screenshots
            </h3>
            <!-- i think it would be nice to make the screenshots section a horizontal scrolling image carousel, i'll look into that next -->
            <div class="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-16">
                <div v-for="(image, index) in screenshots" :key="index">
                    <img :src="image.photo" :alt="image.name">
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
export default {
    data() {
        return {
        currentElement: null,
        screenshots: [
            {
                photo: require('../assets/august2.png')
            },
            {
                photo: require('../assets/august2.png')
            },
            {
                photo: require('../assets/august2.png')
            },
            {
                photo: require('../assets/august2.png')
            },
            {
                photo: require('../assets/august2.png')
            },
            {
                photo: require('../assets/august2.png')
            }
        ]
        };
    },

    created: function() {
        var self = this;

    },

    methods: {
    }
}

</script>


<style scoped>

</style>