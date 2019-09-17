import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title: string;
  name = 'Customer1';

  constructor() {
    this.title = 'Dawn Koehler';
  }

  handleInput = (event: any) => {
    this.name = event.target.value;
  }

  handleBlur = (event: any) => {
    this.name = event.target.value;
    console.log(event);
  }
}
