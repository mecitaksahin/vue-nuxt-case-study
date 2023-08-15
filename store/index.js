import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// Vuex store durumu
export const state = () => ({
    userData: []
});

// Mutations
export const mutations = {
    // userData durumunu güncelliyoruz
    setUserData(state, data) {
        state.userData = data;
    }
};

// Actions
export const actions = {
    // Kullanıcı verilerini async olarak getiriyoruz
    async fetchuserData({ commit }) {
        try {
            // API'den kullanıcı verilerini alıyoruz
            const response = await this.$axios.$get('https://jsonplaceholder.typicode.com/users');
            // Verileri setUserData mutationsa göndererek durumu güncelliyoruz
            commit('setUserData', response);
        } catch (error) {
            // API'den gelen hata mesajı var ise yakalıyoruz
            console.error("Error fetching user data:", error);
        }
    }
};