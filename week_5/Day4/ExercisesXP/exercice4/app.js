import { TodoList } from './todo.js';

const myTodoList = new TodoList();

myTodoList.addTask('Buy groceries');
myTodoList.addTask('Finish project');
myTodoList.addTask('Call Alice');

myTodoList.markComplete(2);

myTodoList.listTasks();
