import { Component, OnInit } from '@angular/core';
import  AOS  from "aos";


@Component({
  selector: 'app-supply-chain',
  templateUrl: './supply-chain.component.html',
  styleUrls: ['./supply-chain.component.css']
})
export class SupplyChainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init()
  }

}
