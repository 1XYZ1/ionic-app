import { Injectable } from '@angular/core';
import { Lista } from '../models/lista-model';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista [] = [];
  list: any;


  constructor( private route: ActivatedRoute) {

    this.cargarStorage();

    // const lista1 = new Lista('Recolectar piedras del infinito');
    // const lista2 = new Lista('Heroes a desaparecer');

    // this.listas.push(lista1, lista2);


   }
// ---------------------------------------------
   crearLista( titulo: string ) {

      const nuevaLista = new Lista(titulo);
      this.listas.push(nuevaLista);
      this.guardarStorage();
      return nuevaLista.id;

   }

// --------------------------------------------


    editarNombre(data, lista) {

      lista.splice(0, 1, data);


    }


// --------------------------------------------

    borrarLista(lista: Lista) {

      this.listas = this.listas.filter(listaData => listaData.id !== lista.id);
      this.guardarStorage();
    }

// --------------------------------------------

obtenerLista(id: string | number) {

  // Se convierte el id a numero
  id = Number(id);
  // Se resume la funcion de flecha, buscar la lista que tenga el mismo id
  return this.listas.find(listaData => listaData.id === id);
}


// -----------------------------------------------
   guardarStorage() {

localStorage.setItem('data', JSON.stringify(this.listas));
   }
// -------------------------------------------
   cargarStorage() {
     if (localStorage.getItem('data')) {
       this.listas = JSON.parse(localStorage.getItem('data'));
     } else {
       this.listas = [];
     }

   }


}
