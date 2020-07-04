import api from '../../api/imgur';
import { router } from '../../main';

//Except for state all contain functions
const state = {
    images: [],
    favourites: []
};

const getters = {
    allImages: state => state.images,
    allFavourites: state => state.favourites
};

const actions = {
    async fetchImages({ rootState, commit }) {
        const { token } = rootState.auth;
        const response = await api.getImages(token);
        commit('setImages', response.data.data);
    },
    async uploadImages({ rootState }, images) {
        const { token } = rootState.auth;
        await api.uploadImages(images, token);
        router.push('/');
    },
    async fetchFavourites({rootState, commit}) {
        const { token } = rootState.auth;
        const response = await api.getFavourites(token);
        commit('setFavourites', response.data.data);
    }
};

const mutations = {
    setImages: (state, images) => state.images = images,
    setFavourites: (state, favourites) => state.favourites = favourites
}

export default {
    state, getters, actions, mutations
}