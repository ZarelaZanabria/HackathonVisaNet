import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
// import { FirebaseApp } from '@angular/fire';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private fire: FirebaseService) { }
  ngOnInit() {
  }

}
