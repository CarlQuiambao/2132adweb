import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }

  Employees(){
    return[
      {id:101,firstname:'Gelo',lastname:'Quiambao',email:'cpquiambao1@student.hau.edu.ph'},
      {id:102,firstname:'James',lastname:'Atienza',email:'jatienza@hau.edu.ph'},
      {id:103,firstname:'John',lastname:'Cena',email:'jcena@hau.edu.ph'},
      {id:104,firstname:'Robert',lastname:'Quintana',email:'rquintana@hau.edu.ph'}
    ]
  }
}
