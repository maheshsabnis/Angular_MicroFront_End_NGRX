import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-omponent',
  template: `
    <h1>The Home Component</h1>
    <div class="alert alert-danger">
      <strong>
        {{title}}
      </strong>
    </div>
  `
})

export class HomeComponent {
  title:string;
  constructor() {
    this.title= 'Home Component';
  }


}
