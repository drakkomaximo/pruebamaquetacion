import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  public userProfile:string
  public userDescription:string
  public userHabilities:string
  public habilities:Array<string>

  constructor() { 
    this.userProfile = "Perfil Profesional"
    this.userDescription = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto aliquam doloribus praesentium culpa voluptate animi. Non cumque harum quae itaque iusto iure porro, debitis possimus quibusdam ut qui, quisquam eius."
    this.userHabilities = "Especialidades"
    this.habilities = ["Cirugia Cardiovascular", "Electrocardiograma", "Hipertensiòn", "Insuficiencia Cardiaca"]
  }

  ngOnInit() {
  }

}
