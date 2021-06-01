import { Component, OnInit } from '@angular/core';
import { RecepieService } from 'src/app/services/recepie.service';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css']
})
export class RecepiesComponent implements OnInit {
  rec:any;

  constructor(private recService:RecepieService) { }

  ngOnInit(): void {
    this.recService.getRecepies().subscribe(r=> this.rec=r);
    
  }
get(){
  console.log(this.rec);
}
}
