import { makeAutoObservable } from 'mobx';


class Store {

    constructor() {
        makeAutoObservable(this)
    }

 tasks = [
        { id: 0, title: 'First one', done: false },
        { id: 1, title: 'second', done: true },
        { id: 2, title: 'third', done: false },
        { id: 3, title: 'third', done: false },
        { id: 4, title: 'third', done: false },
        { id: 5, title: 'third', done: false },
        { id: 6, title: 'third', done: false }
    ];

    get sortedTasks() {
        const tasks = this.tasks;
        return tasks
            .slice()
            .sort((a, b) => (a.done === b.done ? 0 : a.done ? 1 : -1));
    }


    get activeTasksCount() {
        return this.tasks.filter(item => !item.done).length;
    }

    setTasks(payload) {
        this.tasks = payload;
    }

    addTask(task) {
        let tasks = this.tasks;

        tasks.push({
            id: this.tasks.length || 0,
            title: task,
            done: false
        });

        this.setTasks(tasks);
    }

    doneTask(id) {
        let tasks = this.tasks;
        const index = tasks.map(task => task.id).indexOf(id);
        tasks[index].done = true;
        this.setTasks(tasks);
    }

    deleteTask(id) {
        this.setTasks(this.tasks.filter(item => item.id !== id));
    }
}



export default new Store();
