import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-age-display-component',
  templateUrl: './age-display-component.component.html',
  styleUrls: ['./age-display-component.component.css']
})
export class AgeDisplayComponentComponent implements OnInit {
  age :number = 21;
  constructor() { }

  ngOnInit(): void {
  }

}
