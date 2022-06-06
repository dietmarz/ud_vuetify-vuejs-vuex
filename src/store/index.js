import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tasks: [
            {
                id: 1,
                title: 'Wake up',
                done: false
            },
            {
                id: 2,
                title: 'Get Bananas',
                done: false
            },
            {
                id: 3,
                title: 'Eat Bananas',
                done: false
            },

        ],
        snackbar: {
            show: false,
            text: ''
        }

    },
    getters: {},
    mutations: {
        doneTask(state, id) {
            let task = state.tasks.filter(task => task.id === id)[0]
            task.done = !task.done
        },
        addTaskM(state, newTaskTitle) {
            // You can't commit a mutation from within a mutation -> need an action
            let newTask = {
                id: Date.now(),
                title: newTaskTitle,
                done: false
            }
            state.tasks.push(newTask)
        },
        deleteTask(state, id) {
            state.tasks = state.tasks.filter(task => task.id !== id)
        },
        showSnackbar(state, text) {
            state.snackbar.show = true;
            state.snackbar.text = text;
        }
    },
    actions: {
        addTaskA({commit}, newTasktitle) {
            commit('addTaskM', newTasktitle);
            commit('showSnackbar', 'Adding: ' + newTasktitle);
        }

    },
    modules: {}
})
