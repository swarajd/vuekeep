<template>
    <div class="note" @dblclick="deleteThis()">
        <h1>{{note.title}}</h1>
        <pre>{{note.text}}</pre>
    </div>
</template>

<script>
import { deleteNote } from '../vuex/actions';

export default {
    props: ['note'],
    vuex: {
        actions: {
            deleteNote
        }
    },
    methods: {
        deleteThis() {
            this.deleteNote(this.note)
        }
    }
}
</script>