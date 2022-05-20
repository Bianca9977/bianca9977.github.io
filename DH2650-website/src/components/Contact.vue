<template>
    <section id="contact" class = "contact">
        <div class="container mx-auto p-5 h-full flex flex-col justify-center">
            <h3 class="xl:text-6xl text-center">
                The Team
            </h3>
            <div class="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-5 mt-16">
                <div v-for="(feature, index) in features" :key="index">
                    {{ feature.photo }} {{ feature.name }} - {{ feature.role }}
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
var bianca = require('../assets/bianca.jpg');
var august = require('../assets/bianca.jpg');
var max = require('../assets/bianca.jpg');
var andreas = require('../assets/bianca.jpg');
var laura = require('../assets/bianca.jpg');

export default {
    data() {
        return {
        currentElement: null,
        features: [
            {
                name: "Bianca Budulacu",
                role: "role",
                photo: bianca
            },
            {
                name: "August Danell",
                role: "role",
                photo: august2
            },
            {
                name: "Max Wippich",
                role: "role",
                photo: max
            },
            {
                name: "Andreas Wrife",
                role: "role",
                photo: andreas
            },
            {
                name: "Laura Yang",
                role: "role",
                photo: laura
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


<style lang="scss" scoped>

</style>