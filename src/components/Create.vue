<template>
    <form class="create-note" v-on:submit.prevent="createNote()">
        <input name="title" v-model="title" placeholder="Title"/>
        <textarea name="content" v-model="content" placeholder="Text goes here..." rows="3"></textarea>
        <button type="submit">+</button>
    </form>
</template>

<script>
import { addNote } from '../vuex/actions';
import Masonry     from 'masonry-layout';
import uuid        from 'uuid';

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
  ready() {
    this.masonry = new Masonry('.msnry', {
      itemSelector: '.note',
      columnWidth: 300,
      gutter: 16,
      fitWidth: true,
    });
  },
  methods: {
    createNote () {
      if (this.title.trim() || this.content.trim()) {
        let newUUID = uuid.v4();
        this.addNote(this.title, this.content,newUUID);
        this.title = '';
        this.content = '';
        this.masonry.reloadItems();
        this.masonry.layout();
      }
    }
  }
}
</script>

<style>
form.create-note{
  position: relative;
  width: 480px;
  max-width: 100%;
  margin: 0 auto 15px;
  background: #fff;
  padding: 15px;
  border-radius: 2px;
  box-shadow: 0 1px 5px #ccc;
}
form.create-note input, form.create-note textarea{
  width: 100%;
  max-width: 100%;
  border: none;
  padding: 4px;
  outline: none;
  font-size: 1.2em;
}
form.create-note button{
  position: absolute;
  right: 18px;
  bottom: -18px;
  background: #41b883;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.3);
  cursor: pointer;
  outline: none;
}
</style>