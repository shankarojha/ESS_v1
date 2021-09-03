import { Component, OnInit } from '@angular/core';
import  AOS  from "aos";

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init()
  }

}
