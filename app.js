const App = {
    data() {
        return {
            placeholder: 'Enter todo',
            title: 'Todo List',
            inputValue: '',
            todos: []
        }
    },
    methods: {
        addTask() {
            this.todos.push(this.inputValue)
            this.inputValue = ''
        },
        removeTodo(index) {
            this.todos.splice(index, 1)
        }
    },
    computed: {
        allCount() {
            return this.todos.length * 2
        }
    },
    watch: {
        inputValue(value) {
            if (value.length > 50) {
                alert('Too long buddy')
                this.inputValue = ''
            }
        }
    }
}

Vue.createApp(App).mount('#app')

