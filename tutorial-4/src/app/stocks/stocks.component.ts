import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {

  stocks=[
    {name:'TATA',price:900,qty:10},
    {name:'HDFC',price:9000,qty:15},
    {name:'ROLEX',price:5000,qty:20},
    {name:'TIMEX',price:60000,qty:25},
    {name:'GO COLOR',price:90,qty:30},
    {name:'BIT CONI',price:3400000,qty:35}
  ]
  theme="table-light"

  constructor() { }

  ngOnInit(): void {
  }
submit(){
    console.log("button is clicked!")
    console.log(this.stocks.length)
    this.theme="table-dark"
  }

  mousein(){
    this.theme="table-light"
  }
}


