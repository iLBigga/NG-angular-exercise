import { Component, Input } from '@angular/core';


@Component({
  selector: 'contact-item',
  standalone: false,
  templateUrl: './contact-item.component.html',
  styleUrl: './contact-item.component.css'
})
export class ContactItemComponent {

  @Input() contact: any;

}
