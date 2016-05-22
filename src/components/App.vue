<template>
  <div id="app">
    <create-note-form></create-note-form>
    <notes></notes>
    <update-modal :note.sync="selectedNote"></update-modal>
  </div>
</template>

<script>

import Notes          from './Notes.vue';
import CreateNoteForm from './Create.vue';
import UpdateModal    from './UpdateModal.vue';

export default {
  components: { 
    Notes, 
    CreateNoteForm, 
    UpdateModal 
  },
  data() {
    return {
      selectedNote: null
    }
  },
  events: {
    'note.selected': function (note) {
      this.selectedNote = note
    }
  },
}
</script>

<style>
#app {
  width: 97%;
  margin: 0 auto;
}

body {
  background: #eee;
}
</style>
