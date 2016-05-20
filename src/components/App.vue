<template>
  <div id="app">
    <create-note-form></create-note-form>
    <notes></notes>
  </div>
</template>

<script>
import CreateNoteForm from './CreateNote.vue';
import Notes          from './Notes.vue';

export default {
  components: {
    CreateNoteForm,
    Notes
  }
}
</script>

<style src="./style.css"></style>
