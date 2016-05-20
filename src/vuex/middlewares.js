import { STORAGE_KEY } from './store';

const localStorageMiddleware = {
    onMutation ( mutation, { notes }) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    }
}

export default [localStorageMiddleware];