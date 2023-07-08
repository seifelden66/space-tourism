<template lang="pug">
.whole 
    .container 
        .left
            .top
                h1 02 Meet your crew
            .btm 
                h3 {{ selectedMember.role }}
                h1 {{ selectedMember.name }}
                p(style="color:gray") {{ selectedMember.bio }}
            
        .right
            .links
                .div(v-for="i in data.crew")
                    h5(@click="onMemberChange(i)" style="color:gray; cursor:pointer; fontSize:90px") .
            .image
                img(:src="selectedMember.images.png")
            

</template>

<script setup lang="ts">
import data from "../data.json";

const selectedMember = ref(data.crew[0]);

const onMemberChange = (member) => {
    selectedMember.value = member;
};
</script>

<style lang="scss" scoped>
.whole {
    
    background: url(../assets//crew/background-crew-desktop.jpg);
    min-height: 100vh;
    padding-top: 20vh;
    background-repeat: no-repeat;
    background-size: cover;
    .container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        .left{
            .btm{
                margin-top: 2em;
                margin-bottom: .7em;
            }
            
        }
        .right{
            display: flex;
            .image{
                height: 40vw;

                img{
                    height: 100%;
                    width: 100%;
                }
            }
            .links{
                position: absolute;
                left: 3em;
                bottom: 2em;
                display: flex;
                gap: 1.5em;
                .div{
                    h5{
                        transition: 350ms;
                        &:hover{
                            color:#fff!important;
                            transform: scale(1.15);
                        }
                    }
                }
            }
        }
    }
}
@media (max-width: 992px) {
    .whole{
        background-image: url('/assets/crew/background-crew-mobile.jpg');
        .container{
            display: flex;
            flex-direction: column-reverse;
            gap: 2em;
            .left{
                text-align: center;
                
            }
            .right{
                display: flex;
                flex-direction: column-reverse;
                align-items: center;
                .links{

                    justify-content: center;
                    text-align: center;
                    position: static;
                    float: left;
                }
                .image{
                    height: 75vw;
    
                    img{
                        height: 100%;
                        width: 100%;
                    }
                }
            }
        }
    }
}
</style>