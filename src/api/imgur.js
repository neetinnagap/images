import qs from 'qs';
import axios from 'axios';

const CLIENT_ID = '5d20b9de76aa308';
const ROOT_URL = 'https://api.imgur.com';

export default {

    login() {
        const querystring = {
            client_id: CLIENT_ID,
            response_type: 'token'
        };

        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`;
    },

    getImages(token) {
        return axios.get(`${ROOT_URL}/3/account/me/images`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    },

    uploadImages(images, token) {
        const promises = Array.from(images).map(image => {
            const formData = new FormData();
            formData.append('image', image);

            return axios.post(`${ROOT_URL}/3/image`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        });

        // Will resolve when all inner promises are resolved.
        // Waiting for all uploads to be completed before this function completes.
        return Promise.all(promises);
    },

    getFavourites(token) {
        return axios.get(`${ROOT_URL}/3/account/me/favorites/`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }
}