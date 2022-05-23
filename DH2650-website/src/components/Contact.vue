<template>
    <section id="contact" class = "contact">
        <div data-aos="fade-up" data-aos-duration="1500" class="container mx-auto py-2 px-4 2xl:px-0 h-full flex flex-col justify-center">
            <h3 class="xl:text-6xl text-center">
                The Team
            </h3>
            <div class="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-5 mt-16 mx-auto">
                <div data-aos="zoom-in" data-aos-duration="1500" v-for="(member, index) in team" :key="index">
                    <div class="overflow-hidden">
                        <img :src="member.photo" :alt="member.name" /> 
                    </div>
                    <p class="text-center mt-4">
                        <span class="text-2xl">{{ member.name }}</span><br> 
                        <span class="">{{ member.role }}</span>
                    </p>
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
        team: [
            {
                name: "Bianca Budulacu",
                role: "Graphics Lead",
                photo: require('../assets/bianca.png')
            },
            {
                name: "August Danell",
                role: "Business Reporter Lead",
                photo: require('../assets/august.png')
                
            },
            {
                name: "Max Wippich",
                role: "Game Development Lead",
                photo: require('../assets/max.png')
            },
            {
                name: "Andreas Wrife",
                role: "Project Management Lead",
                photo: require('../assets/andreas.png')
            },
            {
                name: "Laura Yang",
                role: "Jack of All Trades",
                photo: require('../assets/laura.png')
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
p {
    span {
        &:first-child {
            font-family: 'El Messiri', sans-serif;
        }
    }
}
</style>