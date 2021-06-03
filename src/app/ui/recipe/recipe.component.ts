import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecepieService } from 'src/app/services/recepie.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
addForm:FormGroup;
  constructor(private recipeService:RecepieService,
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {
this.initForm();
  }

initForm(){
this.addForm=this.formBuilder.group({
  id:['',Validators.required],
  recipeName:['',Validators.required],
  description:['',Validators.required],
  calories:['',Validators.required],
  imgUrl:['',Validators.required],

});
}

addRecipe(){
  
this.recipeService.addRecipe(this.addForm.value);
}
}
