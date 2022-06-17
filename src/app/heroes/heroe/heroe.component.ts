import { Component } from "@angular/core";

@Component({
    selector:"app-heroe",
    templateUrl:`heroe.component.html`
})
export class heroeComponent{

   nombre: string="Ironman";
   edad: number= 24;

   get nombreCapitalizado(){
    return this.nombre.toUpperCase();
   }

   obtenerInfo(){
    return `${this.nombre} - ${this.edad}`
   }

   cambiarNombre():void{
    this.nombre="Spiderman";
   }

   cambiarEdad():void{
    this.edad=22;
   }

}
