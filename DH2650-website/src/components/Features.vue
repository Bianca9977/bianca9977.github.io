<template>
    <section id="features" class = "features">
        <div data-aos="fade-up" data-aos-duration="1500" class="container mx-auto py-2 px-4 2xl:px-0 h-full flex flex-col justify-center">
            <h3 class="text-4xl xl:text-6xl text-center">
                Features
            </h3>
            <div class="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-16">
                <div v-for="(feature, index) in features" :key="index" 
                    @mouseover="currentElement = index"
                    @mouseleave="currentElement = null"
                    class="feature text-center p-3 md:p-5"
                    :class="(currentElement == index) ? 'feature-hover' : ''">
                    <span v-if="currentElement == index" class="text-xl" v-html="feature.textHover"></span>
                    <div class="flex flex-col items-center justify-center" v-else>
                        <img class="icon" :src="feature.icon" />
                        <span class="uppercase text-2xl md:text-3xl" v-html="feature.text"></span>
                    </div>
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
        features: [
            {
                text: "Survival",
                textHover: "The player has to acquire food and build some form of shelter in order to survive.",
                icon: require('../assets/icons/fire.svg')
            },
            {
                text: "Roguelike",
                textHover: "Once the player dies, the game resets with the accumulation of the 'resolve' currency which is persistent through multiple playthroughs.",
                icon: require('../assets/icons/run.svg')
            },
            {
                text: "Open World",
                textHover: "Explore the island in order to collect resources, fight enemies, farm and build your base.",
                icon: require('../assets/icons/explore.svg')
            },
            {
                text: "Enemies",
                textHover: "Spawning at night, on the island there are multiple dangerous enemies, tiki masks, troglodytes and more. These enemies are drawn to the player and will attack the player on sight.",
                icon: require('../assets/icons/danger.svg')
            },
            {
                text: "Character<br/> Growth",
                textHover: "Buy permanent upgrades for your characters with the 'resolve' currency in order to become more powerful.",
                icon: require('../assets/icons/person.svg')
            },
            {
                text: "Building and Farming",
                textHover: "Build fences to protect yourself at night and plant ginger and sweet potatoes to gain energy.",
                icon: require('../assets/icons/farming.svg')
            },
            {
                text: "Procedural Generation",
                textHover: "In accordance with the rougelike concept the world is generated anew each time the player dies with items randomly spawned on the island.",
                icon: require('../assets/icons/hexagon.svg')
            },
            {
                text: "Tiki - Voodoo<br/> theme",
                textHover: "Culturally, the curse of Hau is a curse in accordance with Polynesian lore and culture, specifically the curse of Hau pertains to the entrapment of one’s soul.",
                icon: require('../assets/icons/rainbow.svg')
            },
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