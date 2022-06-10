<template>
  <div>
    <v-list-item @click="$store.commit('doneTask', task.id )"
                 :class="{'blue lighten-5' : task.done}"
    >
      <template>
        <v-list-item-action>
          <v-checkbox :input-value="task.done"></v-checkbox>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title
              :class="{'text-decoration-line-through' : task.done}"
          >{{ task.title }}</v-list-item-title>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon
                 @click.stop="dialogs.delete = true">
            <v-icon color="primary lighten-1">mdi-trash-can-outline</v-icon>
          </v-btn>
        </v-list-item-action>
        <dialog-delete v-if="dialogs.delete" :task="task"/>
      </template>
    </v-list-item>
    <v-divider></v-divider>

  </div>
</template>

<script>
export default {
  props: ['task'],
  data() {
    return {
      dialogs: {
        delete: false
      }
    }
  },
  components: {
    'dialog-delete': require('@/components/Todo/Dialogs/DialogDelete.vue').default
  }
}
</script>