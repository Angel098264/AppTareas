import {Todo} from '../classes'
import {todoList} from '../index'

//Referencias en el html
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFiltros =  document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');

//
export const crearTodoHtml = (todo) =>{
    const htmltodo = `
    <li class="${todo.completado ? 'completed':''}" data-id="${todo.id}">
						<div class="view">
							<input class="toggle" type="checkbox" ${todo.completado ? 'checked':''} >
							<label>${todo.tarea}</label>
							<button class="destroy"></button>
						</div>
						<input class="edit" value="Create a TodoMVC template">
	</li>`;

    const div = document.createElement('div')
    div.innerHTML = htmltodo;

    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;

}

//eventos

txtInput.addEventListener('keyup',(event)=>{

    if (event.keyCode ===13 && txtInput.value.length > 0){
        
        const nuevoTodo = new Todo(txtInput.value);
        todoList.nuevoTodo(nuevoTodo);
        crearTodoHtml(nuevoTodo);
        txtInput.value='';
        
    }
    
});

divTodoList.addEventListener('click',(event)=>{
    
    const nombreElemento = event.target.localName;
    const todoElemento = event.target.parentElement.parentElement;
    const todoId =todoElemento.getAttribute('data-id');

    if(nombreElemento.includes('input')){ //input es el checkbox
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');

    } else if(nombreElemento.includes('button')){ //button es para "eliminar la tarea"
        todoList.eliminartodo(todoId);
        divTodoList.removeChild(todoElemento);

    }



});

btnBorrar.addEventListener('click', () => {

    todoList.eliminarCompletados();
    
    for(let i = divTodoList.children.length -1 ; i >= 0; i--){
        
        const elemento = divTodoList.children[i];

        if(elemento.classList.contains('completed')){
            divTodoList.removeChild(elemento);
        }

    }

    

});

ulFiltros.addEventListener('click', (event) =>{

    const tipoFiltro = event.target.text;
    if(!tipoFiltro){
        return;

    }

    anchorFiltros.forEach(elemento => elemento.classList.remove('selected'));
    event.target.classList.add('selected')

    for (const elemento of divTodoList.children){
        elemento.classList.remove('hidden'); 
        const completado = elemento.classList.contains('completed');

        switch(tipoFiltro){
            case 'Pendientes':
                if(completado){
                    elemento.classList.add('hidden')
                }
            break;

            
            case 'Completados':
                if(!completado){
                    elemento.classList.add('hidden')
                }
            break;
            
    


        }
    }

    console.log(event.target.text);

} );