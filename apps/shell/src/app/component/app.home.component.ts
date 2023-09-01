import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  template: `
     <h1>The Home Component</h1>
     <div class="alert alert-warning">
      <strong>
          {{title}}
      </strong>
     </div>
  `
})

export class HomeComponent implements OnInit {
  title:string;
  constructor() {
    this.title = 'The Hoem Component in Shell App';
  }

  ngOnInit() {
    console.log();
  }
}
