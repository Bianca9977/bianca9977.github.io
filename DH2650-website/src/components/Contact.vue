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

</style>