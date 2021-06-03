import { Component, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { RecepieService } from 'src/app/services/recepie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recipes:any;
  constructor(private recepieService :RecepieService) { 

  }

  ngOnInit(): void {
    this.getAllRecipes()
  }

getAllRecipes(){
this.recipes=this.recepieService.getRecipes()

}
  deleteRecipe(id){
    this.recepieService.deleteRecipe(id);
  }
      
 
}
