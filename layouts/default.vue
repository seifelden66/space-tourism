<template lang="pug">
.contain
    .nav    
        Nav/
    .side
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
.side{
    z-index: 999;
}

}
</style>