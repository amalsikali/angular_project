import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RecepieService {
  uid;
constructor(private afs:AngularFirestore){
   this.uid=JSON.parse(localStorage.getItem('user')).uid ;


}
  addRecipe(recipe){
        this.afs.collection("users/"+this.uid+"/recipes").add(recipe).then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
          console.error("Error adding document: ", error);
      });
  }

  getRecipes(){
   return this.afs.collection("users/"+this.uid+"/recipes").valueChanges();
  }
  deleteRecipe(id){
    let doc =this.afs.firestore.collection("users/"+this.uid+"/recipes").
     where('id','==',id).get();
     doc.then(recipes => { recipes.forEach(recipe=>recipe.ref.delete())
  })
 
   }
}
