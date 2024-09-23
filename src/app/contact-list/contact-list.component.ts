import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  standalone: false,
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent {
  contacts = [
    {
      id : 1,
      name : "John Doe"
    },
    {
      id : 2,
      name : "Maria Doe"
    },
    {
      id : 3,
      name : "Sarah Doe"
    },
     {
      id : 4,
      name : "Willy Doe"
    }
  ]
}
