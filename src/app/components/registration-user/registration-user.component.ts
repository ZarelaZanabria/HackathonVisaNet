import { Component, OnInit } from '@angular/core';
import { RegistroUsuarioService } from 'src/app/services/registro-usuario.service';

@Component({
  selector: 'app-registration-user',
  templateUrl: './registration-user.component.html',
  styleUrls: ['./registration-user.component.scss']
})
export class RegistrationUserComponent implements OnInit {
  model: any = {};
  private clientVn : boolean = false;

  constructor(private _userService: RegistroUsuarioService) {
    this.model.gender = '0';
   }

  ngOnInit() {
       // Me trae todo el arreglo de datos
       this._userService.getUsuario();
       /* this.resetForm(this.model); */
       
  }

  onSubmit() {  
    console.log(this.model);
    this._userService.insertUsuario(this.model);
  }
  notClient() {
    this.clientVn = true;
  }
}
