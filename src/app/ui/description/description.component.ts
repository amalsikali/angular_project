import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecepieService } from 'src/app/services/recepie.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
recipe:any;
  constructor(private recipeService:RecepieService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getRecipe()
  }

    getRecipe(){
      this.route.paramMap.subscribe(params => {
       
          this.recipeService.getRecipe(params.get("id"));
              
         
      })    

    }
}
