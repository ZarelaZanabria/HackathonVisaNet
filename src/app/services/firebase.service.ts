import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor( public DB: AngularFireDatabase) { }
  getColaboratorsDB(){
    this.DB.list('colaboradores').valueChanges().subscribe(data => console.log(data))
    console.log('resvice');
    return this.DB.list('colaboradores').valueChanges();
    
  }
  createTaskDb(){
   
    const date = new Date().getTime();
    return new Promise((resolve) => {
      this.DB.database.ref('prestamos/')
        .set({
          prestamos: [     
            {
              "banco": "Banco de Crédito",
              "name": "Amalia Rodriguez",
              "ruc": "1222234234",
              "estado": "pendiente",
            },          ,
          {
            "banco": "Mi banco",
            "name": "Roxana Meza",
            "ruc": "1222234234",
            "estado": "pendiente",
          },
          { "banco": "Mi banco",
          "name": "Dalia Rojas",
          "ruc": "1222234234",
          "estado": "pendiente",
        }
           ]          
        });
      resolve(true);
    });
  }
}
