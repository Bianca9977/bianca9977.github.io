<template>
    <nav class="bg-white fixed mt-0 z-10 h-10" 
            @mouseover="navbarHover = true"
            @mouseleave="navbarHover = false"
            :class="((navbarHover || !scroll) ? 'increaseOpacity' : 'opacity-50')">
            <div class="container flex flex-wrap justify-between items-center mx-auto h-full">
                <div class="hidden w-full md:block md:w-auto" >
                    <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <button id="nav-gamestory" @click="scrollToSection('gamestory')">Game Story</button>
                        </li>
                        <li>
                            <button id="nav-features" @click="scrollToSection('features')">Features</button>
                        </li>
                        <li>
                            <button id="nav-easter-eggs" @click="scrollToSection('easter-eggs')">Easter eggs</button>
                        </li>
                        <li>
                            <button id="nav-contact" @click="scrollToSection('contact')">Contact</button>
                        </li>
                    </ul>
                </div>

                <!-- MOBILE NAV -->
                <div class="md:hidden">
                    <button class="ml-4" @click="isMobileMenuVisible = true">
                        Navbar
                    </button>
                </div>
                <div v-if="isMobileMenuVisible" class="mobile-menu">
                    <button @click="closeMenu" class="btnClose">&times;</button>
                        <ul class="flex flex-col mt-16 md:hidden">
                        <li class="text-4xl mb-6">
                            <button id="nav-gamestory" @click="scrollToSection('gamestory'); closeMenu()">Game Story</button>
                        </li>
                        <li class="text-4xl mb-6">
                            <button id="nav-features" @click="scrollToSection('features'); closeMenu()">Features</button>
                        </li>
                        <li class="text-4xl mb-6">
                            <button id="nav-easter-eggs" @click="scrollToSection('easter-eggs'); closeMenu()">Easter eggs</button>
                        </li>
                        <li class="text-4xl mb-6">
                            <button id="nav-contact" @click="scrollToSection('contact'); closeMenu()">Contact</button>
                        </li> 
                    </ul>
                </div>
        </div>
    </nav>
</template>

<script>

    export default {
        name: 'NavBar',

        data() {
            return {
                navbarHover: false,
                scroll: false,
                currentSection: '',
                isMobileMenuVisible: false,
            }
        },
        

        mounted: function() {
            var self = this;

            var sections = document.querySelectorAll("#gamestory, #features, #easter-eggs, #contact");
            
            document.addEventListener('scroll', function(e) {
                if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
                    self.scroll = true;
                }
                else {
                    self.scroll = false;
                }


                let scrollY = window.pageYOffset;
                
                sections.forEach(current => {
                    const sectionHeight = current.offsetHeight;
                    const sectionTop = current.offsetTop - 50;
                    var sectionId = current.getAttribute("id");
                    
                    if (scrollY > sectionTop &&scrollY <= sectionTop + sectionHeight)
                    {
                        document.getElementById('nav-' + sectionId).classList.add('nav-active');
                    } else {
                        document.getElementById('nav-' + sectionId).classList.remove('nav-active');
                    }
                }); 
            });
            
        },

        methods: {
            scrollToSection(id) {

                var self = this;

                self.currentSection = id;
                document.getElementsByTagName('section')[id].scrollIntoView({
                    behavior: 'smooth'
                });

            },

            closeMenu: function() {
                var self = this;

                self.isMobileMenuVisible = false
            }
        }
    };


</script>

<style lang="scss" scoped>
nav {
    font-family: 'Acme', sans-serif;

    button {
        &:hover {
            color: #F17F29;
        }

        &.btnClose {
            font-size: 50px;
            position: absolute;
            right: 30px;
        }
    }

    .nav-active {
        color: #F17F29;
        text-decoration: underline;
    }

    .mobile-menu {
        position: fixed;
        background-color: white;
        height: 100vh;
        width: 100%;
        top: 0;
        bottom: 0;
        z-index: 2;
    }
}

.increaseOpacity {
    animation-duration: 1s;
    animation-name: opacity-up;
}

@keyframes opacity-up {
  from {
    opacity: 0.5;
  }

  to {
    opacity: 1;
  }
}

</style>