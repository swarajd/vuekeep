import Vue         from 'vue';
import Vuex        from 'vuex';
import middlewares from './middlewares';

Vue.use(Vuex);

export const STORAGE_KEY = 'vue-keep';

const state = {
    notes: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
}

const mutations = {
    ADD_NOTE(state, title, text) {
        state.notes.push({
            title,
            text
        })
    },

    DELETE_NOTE(state, note) {
        state.notes.$remove(note);
    }
}

export default new Vuex.Store({
    state,
    mutations,
    middlewares
})