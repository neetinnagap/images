<template>
    <div class="container">
        <img v-for="image in images" :key="image.id" :src="getUrl(image.id)" />
    </div>
</template>

<script>
export default {
    name: 'ImageGridView',
    props:['images'],
    methods: {
        getUrl(id) {
            return `https://i.imgur.com/${id}.jpg`
        }
    }
}
</script>

<style scoped>
.container {
    column-count: 3;
    column-gap: 0;
}

img {
    width: 100%;
    padding: 5px;
}
</style>