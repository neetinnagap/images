import api from '../../api/imgur';
import qs from 'qs';
import { router } from '../../main'

const state = {
    token: window.localStorage.getItem('imgur_token')
};

const getters = {
    // isLoggedIn: function(state)  {
    //     return !!state.token;
    // }
    // Short way below:
    isLoggedIn: state => !!state.token
};

const actions = {
    login: () => api.login(),
    finalizeLogin: ({ commit }, hash) => {
        const query = qs.parse(hash.replace('#', ''));
        commit('setToken', query.access_token);
        window.localStorage.setItem('imgur_token', query.access_token);
        router.push('/');
    },
    //getting the commit method from context. can be used as (context) => context.commit()
    logout: ({ commit }) =>{ 
        commit('setToken', null);
        window.localStorage.removeItem('imgur_token');
    }
};

//Setters
const mutations = {
    //state is always ste and comes at 1st position
    setToken: (state, token) => state.token = token
};

export default {
    // state: state,
    state,
    getters,
    actions,
    mutations
}