<template lang="pug">
.whole
    .container 
        .left 
            h5 so, you want to travel to 
            .big
                h1 space
            .desc
                h6 Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
        .right 
            nuxt-link.link(to="/destination").circle 
                h1 explore
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.whole {
  min-height: 100vh;
  padding-top: 35vh;
  background-image: url("../assets/home/background-home-desktop.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    .left {
      text-align: left;
      margin-bottom: 1em;
      .big {
        h1 {
          font-size: 5em;
        }
      }
    }
    .right {
      display: flex;
      justify-content: center;
      .circle {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40vh;
        height: 40vh;
        background: white;
        border-radius: 50%;
        color: black;
      }
    }
  }
}
@media (max-width: 992px) {
  .whole {
    padding-top: 20vh;
    font-size: medium;
    background-image: url("../assets/home/background-home-tablet.jpg");
    .container {
      display: grid;
      grid-template-columns: 1fr;
      .left {
        text-align: center;
        
        .big {
          margin-bottom: 1em;
        }
      }
      .right{
        .circle{
            width: 250px;
            height: 250px;
        }
      }
    }
  }
}
</style>
