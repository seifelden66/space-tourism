<template lang="pug">
.whole
    .container
        .left
            .title
                h3 0 1
                h1 Pick your destination
            .image
                img(:src="selectedDestination.images.png") 
        .right
            .links
                .linkitem(v-for="i in data.destinations")
                    h5(@click="onDestinationChange(i)" style="color:gray; cursor:pointer") {{ i.name }}
            .rightright
                .up
                    h1(style="fontSize:75px; marginBottom:.2em; marginTop:.2em; text-transform: uppercase") {{selectedDestination.name}}
                    p(style="color:gray") {{ selectedDestination.description }}
                .bot
                    .item 
                        h4(style="color:gray") AVG.DISTANCE 
                        h2 {{ selectedDestination.distance }}
                    .item 
                        h4(style="color:gray")  EST. TRAVEL TIME
                        h2 {{ selectedDestination.travel }}
</template>

<script setup lang="ts">
import data from "../data.json";

const selectedDestination = ref(data.destinations[0]);

const onDestinationChange = (destination) => {
  selectedDestination.value = destination;
};
</script>

<style lang="scss" scoped>
.whole {
    
  background: url(../assets/destination/background-destination-desktop.jpg);
  min-height: 100vh;
  padding-top: 20vh;
  .container {
    display: flex;
    align-items: center;
    gap: 20vw;
    .right{
        display: grid;
        grid-template-columns: 1fr;
        width: 40vw;
        .links{
            display: flex; 
            gap: 1em;
        }
        .rightright{
            .up{
                padding-bottom: .5em;
                margin-bottom: .7em;
                border-bottom: 1px solid white;
            }
            .bot{
                display: grid;
                grid-template-columns: 1fr 1fr;
                
            }
        }
        
    }
    .left {
      .image {
        margin-top: 2em;
      }
    }
    
  }
}
@media (max-width: 768px) {
    .whole{
        .container{
            display: grid;
            grid-template-columns: 1fr;
            .left{
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .right{
                width: 100%;
                align-items: center;
                display: flex;
                flex-direction: column;
                margin: 1px auto;
                .links{
                    z-index: 0;
                    .linkitem{
                        text-align: center;
                    }
                }
                .rightright{
                    margin-top: 1.5em;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    .bot{
                        display: flex;
                        flex-direction: column;
                        gap: 0.5em;
                    }
                }
            }
        }
    }
}
</style>
