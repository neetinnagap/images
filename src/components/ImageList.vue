<template>
    <ImageGridView :images="allImages"></ImageGridView>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ImageGridView from './ImageGridView';

export default {
    name: 'ImageList',
    components: {
        ImageGridView
    },
    methods: mapActions(['fetchImages']),
    computed: mapGetters(['allImages']),
    created() {
        this.fetchImages();
    }
}
</script>