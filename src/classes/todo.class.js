export class Todo {



    constructor(tarea){
        this.tarea = tarea;

        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();

    }

    static fromJson({id,tarea,completado,creado}){
        const todoTemp = new Todo();
        todoTemp.tarea = tarea;
        todoTemp.id = id;
        todoTemp.completado = completado;
        todoTemp.creado = creado;

        return todoTemp;
    }




    imprimirClase(){
        console.log(`${this.tarea} - ${this.id}`);
    }
}