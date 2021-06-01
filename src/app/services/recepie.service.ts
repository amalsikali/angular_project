import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecepieService {
 recepieUrl ="https://api.nal.usda.gov/fdc/v1/foods/list?api_key=";
 key ="4twIAPbmpJ3VZQPQc35nno35eXME0VMz2uyvb9y4"
 
  constructor(private http : HttpClient ){ 

  }

  getRecepies(){
    return this.http.get(this.recepieUrl+this.key);
  }

}
