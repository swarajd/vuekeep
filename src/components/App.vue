<template>
  <div id="app">
    <form class="create-note" v-on:submit.prevent="createNote()">
        <input name="title" v-model="title" placeholder="Title"/>
        <textarea name="content" v-model="content" placeholder="Text goes here..." rows="3"></textarea>
        <button type="submit">+</button>
    </form>
    <div class="msnry">
        <note v-for="note in notes" :note="note"></note>
    </div>
  </div>
</template>

<script>

import { addNote } from '../vuex/actions';
import Masonry     from 'masonry-layout';
import Note        from './Note.vue';

export default {
  components: { Note },
  vuex: {
        getters: {
            notes: state => state.notes
        },
        actions: {
          addNote
        }
    },
    data() {
      return {
        title: '',
        content: ''
      }
    },
    ready() {
        this.masonry = new Masonry('.msnry', {
          itemSelector: '.note',
          columnWidth: 300,
          gutter: 16,
          fitWidth: true
        });
    },
    watch: {
      'notes': function(n, o) {
        this.masonry.reloadItems();
        this.masonry.layout();
      }
    },
    methods: {
      createNote() {
        if (this.title.trim() || this.content.trim()) {
          this.addNote(this.title, this.content);
          this.title = '';
          this.content = '';
          this.masonry.reloadItems();
          this.masonry.layout();
        }
      },
    }
}
</script>

<style src="./style.css"></style>
