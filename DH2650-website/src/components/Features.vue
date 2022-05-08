<template>
    <div class = "features">
        <div class="container mx-auto p-5 h-full flex flex-col justify-center">
            <h3 class="xl:text-6xl text-center">
                Features
            </h3>
            <div class="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-16">
                <div v-for="(feature, index) in features" :key="index" 
                    @mouseover="currentElement = index"
                    @mouseleave="currentElement = null"
                    class="feature"
                    :class="(currentElement == index) ? 'feature-hover' : ''">
                    <span v-if="currentElement == index" >{{ feature.textHover }}</span>
                    <span v-else>{{ feature.text }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
export default {
    data() {
        return {
        currentElement: null,
        features: [
            {
                text: "Feature 1",
                textHover: "Feature 1 Hover"
            },
            {
                text: "Feature 2",
                textHover: "Feature 2 Hover"
            },
            {
                text: "Feature 3",
                textHover: "Feature 3 Hover"
            },
            {
                text: "Feature 4",
                textHover: "Feature 4 Hover"
            },
            {
                text: "Feature 5",
                textHover: "Feature 5 Hover"
            },
            {
                text: "Feature 6",
                textHover: "Feature 6 Hover"
            },
            {
                text: "Feature 7",
                textHover: "Feature 7 Hover"
            },
            {
                text: "Feature 8",
                textHover: "Feature 8 Hover"
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