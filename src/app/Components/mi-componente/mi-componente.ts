import { Component } from '@angular/core';

@Component({
    selector: 'mi-componente',
    template: `
        <h1>{{titulo}}</h1>
        <p>{{comentario}}</p>
        <h2>{{year}}</h2>
     `

})

export class MiComponente{

    public titulo: string;
    public comentario: string;
    public year: number;
    
    constructor(){
        this.titulo = "Hola mundo, soy otro constructor(2)";
        this.comentario = "Este es el primer comentario(3)";
        this.year = 2020;

        console.log("Componente mi-componente cargando !!");
        console.log(this.titulo,this.comentario,this.year);
        
    }
}