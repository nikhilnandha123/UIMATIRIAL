import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  card:any = []


  constructor(private _CardService:CardService) { }

  
  ngOnInit(): void {
    this._CardService.getPost().subscribe((data:any)=>{this.card=data})
  }
}
