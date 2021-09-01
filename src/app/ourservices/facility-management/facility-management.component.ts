import { Component, OnInit } from '@angular/core';
import  AOS  from "aos";

@Component({
  selector: 'app-facility-management',
  templateUrl: './facility-management.component.html',
  styleUrls: ['./facility-management.component.css']
})
export class FacilityManagementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init()
  }

}
