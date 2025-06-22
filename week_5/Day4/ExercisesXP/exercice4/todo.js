export class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push({ task, complete: false });
  }

  completeTask(index) {
    if (this.tasks[index]) this.tasks[index].complete = true;
  }

  listTasks() {
    this.tasks.forEach((t, i) =>
      console.log(`${i + 1}. ${t.task} - ${t.complete ? "Done" : "Pending"}`));
  }
}
