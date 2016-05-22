<template>
    <div class="msnry">
        <note v-for="note in notes" :note="note" v-on:click="selectNote(note)"></note>
    </div>
</template>

<script>
import Note    from './Note.vue';
import Masonry from 'masonry-layout';

export default {
  components: { Note },
  vuex: {
    getters: {
      notes: state => state.notes
    },
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
    selectNote({uuid, title, text}) {
      console.log(uuid, title, text);
      this.$dispatch('note.selected', {uuid, title, text});
    }
  }
}

</script>