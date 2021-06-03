import { Component, OnInit } from '@angular/core';
import { RecepieService } from 'src/app/services/recepie.service';

@Component({
  selector: 'app-favorits',
  templateUrl: './favorits.component.html',
  styleUrls: ['./favorits.component.css']
})
export class FavoritsComponent implements OnInit {

  constructor(private reipeService:RecepieService) { }
recipies:any;
  ngOnInit(): void {
    this.recipies=this.reipeService.getFavorits();
  }
  delete(id){
    this.reipeService.deletefromFavorits(id);
  }
 
}
