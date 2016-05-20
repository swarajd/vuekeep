<template>
    <form class="create-note" v-on:submit.prevent="createNote()">
        <input name="title" v-model="title" placeholder="Title"/>
        <textarea name="content" v-model="content" placeholder="Text goes here..." rows="3"></textarea>
        <button type="submit">+</button>
    </form>
</template>

<script>
import { addNote } from '../vuex/actions';

export default {
  vuex: {
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
  methods: {
    createNote() {
      if (this.title.trim() || this.content.trim()) {
        this.addNote(this.title, this.content);
        // console.log('asdf');
        this.title = '';
        this.content = '';
      }
    }
  }
}
</script>