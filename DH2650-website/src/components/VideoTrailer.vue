<template>
    <section v-if="!skippedVideo" id="video" class = "videotrailer">
<!--             <iframe id="video" width="1700" height="850" src="https://www.youtube.com/embed/dQw4w9WgXcQ?enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 -->          
        <div id="player"></div>
        <div class="skip-button">
            <button @click="skipVideo" id="skipButton">
                SKIP VIDEO
            </button>
        </div>
    </section>
</template>

<script>
    import { bus } from '../main';

    export default {
        name: 'VideoTrailer',

        data() {
            return {
                player: null,
                skippedVideo: false,
            }
        },

        created: function() {
            var tag = document.createElement("script");
            tag.src = "https://www.youtube.com/iframe_api";
            var firstScriptTag = document.getElementsByTagName("script")[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        },

        mounted: function() {
            window.onYouTubeIframeAPIReady = () => {
                console.log("onYouTubeIframeAPIReady");
                this.initYoutube();
            };   

            bus.$on('skipVideo', function() {
                this.skippedVideo = true;
            })
        },

        methods: {
            initYoutube() {
                const _ = this;
                console.log("initYoutube");
                this.player = new YT.Player("player", {

                    videoId: "dQw4w9WgXcQ",
                    events: {
                    onReady: _.onPlayerReady,
                    onStateChange: _.onPlayerStateChange
                    }
                });
            },
            onPlayerReady(evt) {
                document.getElementById('skipButton').addEventListener('click', function() {
                    evt.target.pauseVideo();
                })
            },

            skipVideo: function() {
                bus.$emit('skipVideo');
                this.skippedVideo = true;
            }
        },

        

    };


</script>


<style scoped>
</style>