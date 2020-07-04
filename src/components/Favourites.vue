<template>
    <ImageGridView :images="allFavourites"></ImageGridView>
</template>

<script>
import ImageGridView from './ImageGridView';
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'Favourites',
    components: {
        ImageGridView
    },
    computed: mapGetters(['allFavourites']),
    methods: mapActions(['fetchFavourites']),
    created() {
        this.fetchFavourites();
    }
}
</script>