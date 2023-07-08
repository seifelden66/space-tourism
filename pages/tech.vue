<template lang="pug">
.whole 
    .container 
        .left 
            .top 
                h1 03 Space launch 101
                
            .btm
              .ri
                ol
                  li(v-for="i in data.technology" @click="onTechChange(i)")
              .le
                h4(style="color:gray") THE TERMINOLOGY...
                h1 {{ selectedTech.name }}
                p(style="color:gray") {{ selectedTech.description }}
        .right 
          img(:src="selectedTech.images.portrait")

</template>

<script setup lang="ts">
import data from "../data.json";

const selectedTech = ref(data.technology[0]);

const onTechChange = (tech) => {
  selectedTech.value = tech;
};
</script>

<style scoped lang="scss">
.whole {
  background: url(../assets/technology/background-technology-desktop.jpg);
  min-height: 100vh;
  padding-top: 20vh;
  background-repeat: no-repeat;
  background-size: cover;
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.8em;
    .left {
     
      .top {
        margin-top: 1em;
        
      }
      .btm {
        display: flex;
        gap: 1.5em;
        margin-top: 1.5em;
        ol {
          li {
            display: flex;
            align-items: center;
            margin-bottom: 1em;
            margin-right: 1em;
            counter-increment: item;
            transform: translateX(-1em);
            cursor: pointer;
            &:before {
              content: counter(item);

              border-radius: 50%;
              background-color: #f7f5f5;
              color: #000000;
              width: 1.6em;
              height: 1.6em;
              text-align: center;
            }
          }
          
        }
        .le{
          h1{
            font-size:  calc(2vw + 20px);
            
          }
        }
      }
    }
    .right{
      margin-top: 2em;
      height: 70vh;
      width: 40vw;
    }
  }
}
@media (max-width:992px) {
  .whole{
    background-image: url('../assets//technology/background-technology-mobile.jpg');
    .container{
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      .left{
        .btm{
          display: flex;
        flex-direction: column-reverse;
        align-items: center;
        ol{
          display: flex;
          align-items: center;
        justify-content: center;
        text-align: center;
        transform: translateX(1em);
        }
        }
      }
      .right{
        
        margin-top: 2em;
      height: 55vh;
      width: 80vw;
      margin-bottom: 1em;
      }
    }
  }
}
</style>
