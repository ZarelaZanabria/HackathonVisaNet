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
  createTaskDb() {
   
    const date = new Date().getTime();
    return new Promise((resolve) => {
      this.DB.database.ref('colaboradores/')
        .set({
          integrants: [
      
            {
              "name": "Luna",
              "lastname": "Torres",
              "profession": "Contadora",
              "experience": "3 años de Experiencia",
              "nearness": "1.5 KM",
              "areasExperience": ['Textil'],
                 "img" : 'http://www.asiseemprende.com/wp-content/uploads/2017/03/Conoce-los-mejores-y-peores-pa%C3%ADses-para-Mujeres-Emprendedoras-795x530.jpg'
            },
            {
              "name": "Denisse",
              "lastname": "Galvez",
              "profession": "Abogada",
              "experience": "4 años de Experiencia",
              "nearness": "8 KM ",
              "areasExperience": ['Peluqueria'],
                "img": 'data:image/jpeg;base64,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',      
            },
            {
              "name": "Kiara ",
              "lastname": "Green",
              "profession": "Comunicadora",
              "experience": "5 años de Experiencia",
              "nearness": "1.5 KM",
              "areasExperience": ['Restaurant'],
           "img": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAFU5MX7bQhEhrpO0tQh3ZlOYnJ0PqlLM7isF4IH5GMQq_pjA6GQ',
            },
            {
              "name": "Karol",
              "lastname": "Barriga",
              "profession": "Administradora",
              "experience": "1 año de Experiencia",
              "nearness": "0.5 KM",
              "areasExperience": [ 'Restaurant', 'Peluqueria', 'Textil', 'Tecnología'],
                    "img": 'tbn:ANd9GcTtnK13OZ9rGOsW3htSV6LAUVpSA_6LDm1Db9jRshMEBI8c270i',
            }
           ]          
        });
      resolve(true);
    });
  }
}
