<template lang="pug">
div
    aside
        transition(
            enter-to-class="animate__animated animate__slideInRight",
            leave-to-class="animate__animated animate__slideOutRight"
        )
            .side(v-show="side")
                button(@click="close") 
                    Close/
                .items
                    .linkitem
                        nuxt-link.link(to="/"  :class="{ active: isActive('/') }") 00 Home
                    .linkitem 
                        nuxt-link.link(to="destination"  :class="{ active: isActive('/destination') }") 01 Destination 
                    .linkitem 
                        nuxt-link.link(to="crew"  :class="{ active: isActive('/crew') }") 02 Crew 
                    .linkitem 
                        nuxt-link.link(to="tech"  :class="{ active: isActive('/tech') }") 03 Technology 
    </template>
    
    <script setup lang="ts">
     const router = useRouter();
    
    const isActive = (route: string) => {
      return router.currentRoute.value.hash === route;
    };
    </script>
    
    <style lang="scss" scoped>
    .animate__animated.animate__slideInLeft,
    .animate__animated.animate__slideOutLeft{
        animation-duration: 600ms;
      }
    .side {
        z-index: 999;
      font-size: 26px;
      background: #161c28;
      color: #A6A6A6;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      width: 270px;

      padding: 1em;
      text-align: left;
      button{
        margin-left: 10px;
        background: #00000000;
        border: none;
        color: gray;
    }
      .items{
        text-align: left;
        margin-top: 1em;
        
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2.5em;
        
      }
      
    }
    </style>