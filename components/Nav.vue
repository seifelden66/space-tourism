<template lang="pug">
.container-fluid
  .container 
      .left
          img(:src="logo")
      .right 
          .br   
          .linkitem
              nuxt-link.link(to="/"  :class="{ active: isActive('/') }") 00 Home
          .linkitem 
              nuxt-link.link(to="destination"  :class="{ active: isActive('/destination') }") 01 Destination 
          .linkitem 
              nuxt-link.link(to="crew"  :class="{ active: isActive('/crew') }") 02 Crew 
          .linkitem 
              nuxt-link.link(to="tech"  :class="{ active: isActive('/tech') }") 03 Technology 
      .icon(@click="open")
        Open/
</template>

<script lang="ts" setup>
const logo = "logo.svg";
const router = useRouter();

const isActive = (route: string) => {
  return router.currentRoute.value.path  === route;
};
</script>

<style lang="scss" scoped>
.container-fluid{
  .container {
  
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon{
      display: none;
    }
    .right {
      font-size: calc(.5vw + .5em);
      height: 13vh;
      width: 50vw;
      float: right;
      display: flex;
      gap: 0.85em;
      align-items: center;
      background: #161723c4;
      padding: 1em;
      justify-content: right;
      padding-right: 2em;
      position: absolute;
      right: 0;
      .br {
        border-bottom: #fffffff5 solid 2px;
        width: 32vw;
        position: absolute;
        left: -22vw;
      }
    }
  }
}
@media (max-width:1200px) {
  .container-fluid{
    .container{
      .right{
        .br{
          display: none;
        }
      }}
  }
}
@media (max-width:992px){
 .container-fluid{
  .container{
    
    .right{
      display: none;
    }
    .icon{
      font-size: 22px;
        display: block;
        cursor: pointer;
    }
  }
 }
}
</style>
