<template>
    <div class="world">
        <img v-for="(world, index) in images"
             :key="index"
             :src="world.image"
             @click="imgClick(index)"
        >
    </div>
</template>

<script>
    import { bus } from "../../main";

    export default {
        data() {
            return {
                images: [
                    {image: require('../../assets/img/world/0.jpg')},
                    {image: require('../../assets/img/world/1.jpg')},
                    {image: require('../../assets/img/world/2.jpg')},
                    {image: require('../../assets/img/world/3.jpg')},
                ],
            }
        },
        methods: {
            imgClick(index) {
                bus.$emit('message', index);
            }
        }
    }

</script>

<style scoped>

</style>