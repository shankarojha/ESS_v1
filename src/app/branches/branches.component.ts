import { Component, OnInit } from '@angular/core';
import  AOS  from "aos";

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init()
  }

}
