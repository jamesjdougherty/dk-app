import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title: string;
  firstName = 'First Name';
  lastName = 'Last Name';
  phoneNumber = 'Phone';
  email = 'Email';
  customerMessage = 'Message';

  constructor() {
    this.title = 'Dawn Koehler';
  }

  handleFirstName = (event: any) => {
    this.firstName = event.target.value;
  }

  handleLastName = (event: any) => {
    this.lastName = event.target.value;
  }

  handlePhoneNumber = (event: any) => {
    this.phoneNumber = event.target.value;
  }

  handleEmail = (event: any) => {
    this.email = event.target.value;
  }

  handleCustomerMessage = (event: any) => {
    this.customerMessage = event.target.value;
  }

  handleBlur = (event: any) => {
    this.firstName = event.target.value;
    console.log(event);
  }
}
