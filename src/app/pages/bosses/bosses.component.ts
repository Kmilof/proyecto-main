import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bosses',
  templateUrl: './bosses.component.html',
  styleUrls: ['./bosses.component.css']
})
export class BossesComponent implements OnInit {
  
  public chapter:string='';

  constructor() { }
  
  ngOnInit(): void {
  }
}
