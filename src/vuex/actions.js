export const addNote = makeAction('ADD_NOTE');
export const deleteNote = makeAction('DELETE_NOTE');

function makeAction(type) {
    return ({ dispatch }, ...args) => dispatch(type, ...args)
}