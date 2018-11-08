import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
// import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  public colaborators : any;
  constructor(private DB: FirebaseService) { 
    this.DB.createTaskDb()
    this.DB.getColaboratorsDB().subscribe(data=> this.colaborators = data[0])
    console.log(this.colaborators);
  }
  ngOnInit() {
   
  }

}
