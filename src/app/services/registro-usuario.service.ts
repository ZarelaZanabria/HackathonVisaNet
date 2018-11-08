import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";


@Injectable({
  providedIn: 'root'
})
export class RegistroUsuarioService {
 // Any tipo de dato que trae desde Firebase
 usuarioList: AngularFireList<any>;

 constructor(private firebase: AngularFireDatabase) {}
 // Metodos para obtener los datos de la base de datos de Firebase
 getUsuario() {
   // Asignarle la lista de elementeos y toda la lista esta alamcenada en tareas
   return (this.usuarioList = this.firebase.list("Usuarios"));
 }
 // Vamos a utilizar un parametro Tarea que sera de clase Usuario
 insertUsuario(usuario) {
   if (usuario.email !== "") {
     // Agregamos Datos a la Lista con este tenemos la Tarea que vamos a insertar
     this.usuarioList.push({
       name: usuario.nameClient,
       apellido: usuario.apellClient,
       email: usuario.email,
       dni: usuario.dni,
       phone: usuario.phone,
       ruc : usuario.ruc,
       codigo: usuario.codClient ||  null,
       rubroNegocio: usuario.rubroNegocio,
       password : usuario.password,
      /*  ,
       
       gender: usuario.gender,
       born: usuario.born */
     });
   } else {
     alert("hola");
   }
 }
}
