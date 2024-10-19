import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  imageSource: string =
    '../../assets/images/cce9d662d61d7f77c0bc15bbf1bed55f.jpg';
}
