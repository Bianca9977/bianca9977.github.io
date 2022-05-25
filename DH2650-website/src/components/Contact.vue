<template>
    <section id="contact" class = "contact">
        <div data-aos="fade-up" data-aos-duration="1500" class="container mx-auto py-2 px-4 2xl:px-0 h-full flex flex-col justify-center">
            <h3 class="text-4xl xl:text-6xl text-center">
                The Team
            </h3>
            <div class="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-5 mt-16 mx-auto">
                <div data-aos="zoom-in" data-aos-duration="1500" v-for="(member, index) in team" :key="index">
                    <div class="overflow-hidden">
                        <img class="member-img" :src="member.photo" :alt="member.name" /> 
                    </div>
                    <p class="text-center mt-4">
                        <span class="text-2xl">{{ member.name }}</span><br> 
                        <span class="">{{ member.role }}</span>
                    </p>
                    <div class="links mt-2 flex justify-center">
                        <a v-for="(link, index) in member.links" :key="index" class="link" :href="link.url" target="_blank">
                            <img :src="require('../assets/link-icon.png')" :title="link.title" class="mx-1">
                        </a>
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
        team: [
            {
                name: "Bianca Budulacu",
                role: "Graphics Lead",
                photo: require('../assets/bianca.png'),
                links: [
                    {
                        title: 'LinkedIn',
                        url: 'https://www.linkedin.com/in/bianca-budulacu-07231a18a/'
                    }
                ]
            },
            {
                name: "August Danell",
                role: "Business Reporter Lead",
                photo: require('../assets/august.png'),
                links: [
                    {
                        title: 'LinkedIn',
                        url: 'https://www.linkedin.com/in/august-danell-h%C3%A5kansson-854768115/'
                    }
                ]
                
            },
            {
                name: "Max Wippich",
                role: "Game Development Lead",
                photo: require('../assets/max.png'),
                links: [
                    {
                        title: 'LinkedIn',
                        url: 'https://www.linkedin.com/in/maxwippich'
                    },
                    {
                        title: 'GitHub',
                        url: 'https://github.com/MWippich'
                    }
                    
                ]
            },
            {
                name: "Andreas Wrife",
                role: "Project Management Lead",
                photo: require('../assets/andreas.png'),
                links: [
                    
                ]
            },
            {
                name: "Laura Yang",
                role: "Jack of All Trades",
                photo: require('../assets/laura.png'),
                links: [
                    {
                        title: 'LinkedIn',
                        url: 'https://www.linkedin.com/in/laura-yang/'
                    }
                ]
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