import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-display-component',
  templateUrl: './name-display-component.component.html',
  styleUrls: ['./name-display-component.component.css']
})
export class NameDisplayComponentComponent implements OnInit {

  first_name : String ="Deepika";
  last_name : String ="Vuddagiri";

  constructor() { }

  ngOnInit(): void {
  }

}
