import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RegistroUsuarioService } from 'src/app/services/registro-usuario.service';

@Component({
  selector: 'app-registration-user',
  templateUrl: './registration-user.component.html',
  styleUrls: ['./registration-user.component.scss']
})
export class RegistrationUserComponent implements OnInit {

  //Paso 4
  public banks: any[]
  public validateNumbers: boolean = false;
  public bankSelect: string;
  public numberAccount: string;
  public validAccount: boolean = true;
  public ejemAccount: string = '12345678901234567890';
  public cant: any;
  public cantRecomeded: string;
  public noneBank: boolean = false;
  public noneAccount: boolean = false;
  public noneConditions: boolean = false;
  //Paso 2
  model: any = {};
  @Output() activeSecondStep: EventEmitter<any> = new EventEmitter<void>();
  public clientVn: boolean = false;

  constructor(private _userService: RegistroUsuarioService) {

    //Paso 2
    this.model.gender = '0';
    //Paso 4
    this.banks = [
      { name: 'Banco de Crédito', numbers: 15 },
      { name: 'Interbank', numbers: 17 },
      { name: 'Banco de la Nación', numbers: 14 },
      { name: 'BBVA Continental', numbers: 18 },
      { name: 'Banco Pichincha', numbers: 15 },
      { name: 'Mi banco', numbers: 18 },
      { name: 'Scotiabank', numbers: 20 },
    ];

  }

  ngOnInit() {
    // Me trae todo el arreglo de datos
    this._userService.getUsuario();
    /* this.resetForm(this.model); */

  }

  validateForm() {
   
    this._userService.insertUsuario(this.model);
    this.emmitThreeStep();
  
  }
  notClient() {
    this.clientVn = true;
  }

  emmitThreeStep() {
    this.activeSecondStep.emit({
      item: 'stepThree',
    });
  }
  //Paso 4-------------------------------------
  checkoutCant() {
    this.cant = this.banks.filter(elem => elem.name === this.bankSelect);
    this.cantRecomeded = this.ejemAccount.slice(0, this.cant[0]['numbers'])
    console.log(this.cant[0]['numbers'])
  }

  onSubmit(value1, value2) {
    // this.cant = this.banks.filter(elem=>elem.name === this.bankSelect);
    // console.log();
    this.model.cuenta = this.numberAccount;
    this.model.banco = this.bankSelect;

    console.log(this.model);
  
    if (!value1.checked || !value2.checked) this.noneConditions = true;
    if(value1.checked && value2.checked)  this.validateForm();
   

  }
}
