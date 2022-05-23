<template>
    <section id="features" class = "features">
        <div data-aos="fade-up" data-aos-duration="1500" class="container mx-auto py-2 px-4 2xl:px-0 h-full flex flex-col justify-center">
            <h3 class="xl:text-6xl text-center">
                Features
            </h3>
            <div class="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-16">
                <div v-for="(feature, index) in features" :key="index" 
                    @mouseover="currentElement = index"
                    @mouseleave="currentElement = null"
                    class="feature text-center p-3 md:p-5"
                    :class="(currentElement == index) ? 'feature-hover' : ''">
                    <span v-if="currentElement == index" class="text-xl" v-html="feature.textHover"></span>
                    <span v-else class="uppercase text-2xl md:text-3xl" v-html="feature.text"></span>
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
                textHover: "The player has to acquire food and build some form of shelter in order to survive."
            },
            {
                text: "Roguelike",
                textHover: "Once the player dies, the game resets but with the accumulation of the 'resolve' currency that is persistent through multiple playthrough."
            },
            {
                text: "Open World",
                textHover: "Explore the island in order to collect resources, fight enemies, farm and build your base."
            },
            {
                text: "Building and Farming",
                textHover: "Collect materials, farm crops, build structures and collect blueprints"
            },
            {
                text: "Character<br/> Growth",
                textHover: "Buy permanent upgrades for your characters with the 'resolve' currency in order to become more powerful."
            },
            {
                text: "Enemies",
                textHover: "Spawning at night, on the island there are multiple dangerous enemies, tiki masks, troglodytes and more. These enemies are drawn to the player and will attack the player on sight. "
            },
            {
                text: "Procedural Generation",
                textHover: "In accordance with the rougelike concept the world is generated anew each time the player dies with items randomly spawned on the island."
            },
            {
                text: "Tiki - Voodoo<br/> theme",
                textHover: "Culturally, the curse of Hau is a curse in accordance with Polynesian lore and culture, specifically the curse of Hau pertains to the entrapment of one’s soul."
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