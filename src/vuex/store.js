import Vue         from 'vue';
import Vuex        from 'vuex';
import middlewares from './middlewares';

Vue.use(Vuex);

export const STORAGE_KEY = 'vue-keep';

const state = {
    notes: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
}

const mutations = {
    ADD_NOTE(state, title, text, uuid) {
        state.notes.push({
            uuid,
            title,
            text
        })
    },

    DELETE_NOTE(state, note) {
        state.notes.$remove(note);
    },

    UPDATE_NOTE(state, note) {
        state.notes = state.notes.map((nt) => {
            if (nt.uuid == note.uuid) {
                console.log('matches');
                nt.title = note.title;
                nt.text = note.text;
            }
            return nt;
        });
    }
}

export default new Vuex.Store({
    state,
    mutations,
    middlewares
})