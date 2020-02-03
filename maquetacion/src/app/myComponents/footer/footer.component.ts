import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public userDate:any

  constructor() { 
    this.userDate = "Martes, 11 de septiembre"
  }
  

  ngOnInit() {
  }

}
