<template lang="pug">
.contain
    .nav    
        Nav/
        Side/
    .slot
        slot/
</template>

<script setup>

</script>

<style lang="scss" scoped>
.contain{
position: relative;
.nav{
    top: 5vh;
    position: fixed;
    width: 100%;
}

}
</style>