import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RecepieService {
  uid;
  public recipe1
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
  addToFavorits(recipe){
    this.afs.collection("users/"+this.uid+"/favorits").add(recipe).then((docRef) => {
      console.log("Document add with ID: ", docRef.id);
  })
  .catch((error) => {
      console.error("Error adding document: ", error);
  });
  }
  getFavorits(){
    return this.afs.collection("users/"+this.uid+"/favorits").valueChanges();

  }
   getRecipe(id){
     let recipee
    let doc =this.afs.firestore.collection("users/"+this.uid+"/recipes").
    where('id','==',id).get();
    doc.then(recipes => {recipes.forEach(recepie=>recepie.ref.get().then(res=>console.log(res)
    )
    )})
 
 return recipee;
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
   deletefromFavorits(id){
    let doc =this.afs.firestore.collection("users/"+this.uid+"/favorits").
     where('id','==',id).get();
     doc.then(recipes => { recipes.forEach(recipe=>recipe.ref.delete())
  })
 
   }
}
