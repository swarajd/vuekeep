<template>
    <note v-for="note in notes" :note="note"></note>
</template>

<script>
import Note from './Note.vue'

export default {
    components: { Note },
    vuex: {
        getters: {
            notes: state => state.notes
        }
    }

}

</script>