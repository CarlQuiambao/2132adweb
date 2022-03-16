import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-emplist3',
  templateUrl: './emplist3.component.html',
  styleUrls: ['./emplist3.component.css']
})
export class Emplist3Component implements OnInit {

  Emp3Details:any;
  constructor(private myservice:MyserviceService) { }

  ngOnInit(): void {
    this.Emp3Details = this.myservice.Employees();
  }

}