<template>
  <v-text-field
      v-model="newTaskTitle"
      @click:append="addTaskC()"
      @keyup.enter="addTaskC()"
      class="pa-3"
      outlined
      label="Add Task"
      append-icon="mdi-plus"
      hide-details
      clearable
  ></v-text-field>
</template>

<script>
export default {
  data() {
    return {
      newTaskTitle: ''
    }
  },
  methods: {
    addTaskC() {
      this.$store.dispatch('addTaskA', this.newTaskTitle);
      this.newTaskTitle = '';
    }
  }
}
</script>