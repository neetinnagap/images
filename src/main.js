import Vue from 'vue';
import App from './App';
import store from './store/';
import VueRouter from 'vue-router';
import AuthHandler from './components/AuthHandler';
import ImageList from './components/ImageList';
import UploadForm from './components/UploadForm';
import Favourites from './components/Favourites';

Vue.use(VueRouter);

export const router = new VueRouter({
    // Converts default hash router to browser router:
    mode: 'history',
    routes: [
        {path: "/", component: ImageList},
        {path: "/favourites", component: Favourites},
        {path: "/upload", component: UploadForm},
        {path: "/oauth2/callback", component: AuthHandler}
    ]
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');