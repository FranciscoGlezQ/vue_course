<template>
    <div class="container py-3 px-5">
        <label for="new-task">Add new task</label> <br>
        <input  id="new-task" @keyup.enter="addTask" v-model="newTodo">
        <button id="add-task" class="btn btn-outline-primary mx-2" @click="addTask">Ad task</button>
        <ul>
            <li class="todo"
                @click="$event.target.classList.toggle('completed')"
                v-for="(task,index) in tasks"
                :key="task">
                {{ task }}
                <button class="delete-todo" @click="removeTask(index)">
                    X
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                newTodo: '',
                tasks: []
            }
        },
        methods: {
            addTask() {
                if (this.newTodo.length > 0 && this.tasks.indexOf(this.newTodo) < 0) {
                    this.tasks.push(this.newTodo);
                    this.newTodo= '';
                }
            },
            removeTask(value){
                this.tasks.splice(value, 1);
            }
        }
    }
</script>

<style lang=scss scoped>
    li.tasks {
        cursor: pointer;
    }
    .completed {
        text-decoration: line-through;
    }
</style>