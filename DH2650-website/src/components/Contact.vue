<template>
    <section id="contact" class = "contact">
        <div class="container mx-auto p-5 h-full flex flex-col justify-center">
            <h3 class="xl:text-6xl text-center">
                The Team
            </h3>
            <div class="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-5 mt-16">
                <div v-for="(member, index) in team" :key="index">
                    <img :src="member.photo" :alt="member.name"> <br> {{ member.name }} <br> {{ member.role }}
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
var bianca = require('../assets/bianca.jpg');
var august = require('../assets/august2.png');
var max = require('../assets/max.jpg');
var andreas = require('../assets/andreas.jpg');
var laura = require('../assets/laura.jpg');

export default {
    data() {
        return {
        currentElement: null,
        team: [
            {
                name: "Bianca Budulacu",
                role: "Graphics Lead",
                photo: require('../assets/bianca.jpg'),
                photoname: "bianca.jpg",
                photopath: "../assets/bianca.jpg"
            },
            {
                name: "August Danell",
                role: "Business Reporter Lead",
                photo: require('../assets/august2.png'),
                photoname: "august2.png",
                photopath: "../assets/august2.png"
                
            },
            {
                name: "Max Wippich",
                role: "Game Development Lead",
                photo: require('../assets/max.jpg'),
                photoname: "max.jpg",
                photopath: "../assets/max.jpg"
            },
            {
                name: "Andreas Wrife",
                role: "Project Management Lead",
                photo: require('../assets/andreas.jpg'),
                photoname: "andreas.jpg",
                photopath: "../assets/andreas.jpg"
            },
            {
                name: "Laura Yang",
                role: "Jack of All Trades",
                photo: require('../assets/laura.jpg'),
                photoname: "laura.jpg",
                photopath: "../assets/laura.jpg"
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