import './styles.css';

import {Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

//const tarea = new Todo('Aprender JavaScript');
//todolist.nuevoTodo(tarea);
//console.log(todolist);
//crearTodoHtml(tarea);

//localStorage.setItem('mi-key','abc123');

todoList.todos.forEach(todo => crearTodoHtml(todo));

console.log('todos', todoList.todos);