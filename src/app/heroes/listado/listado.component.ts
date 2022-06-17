import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

  Heroes: string[] = ["Spiderman", "Ironman", "hulk", "Superman"]
  heroeBorrado: string = "";

  borrarHeroe(){
    
    this.heroeBorrado = this.Heroes.shift()||"";
    
  }
  
}
