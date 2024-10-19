import { Component } from '@angular/core';
import { Agent } from 'http';

@Component({
  selector: 'footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  title: string = 'hello footer';
  isdisibled: boolean = false;
  isActive: boolean = false;
  fruitName: string = 'apple';
}
//ternary is one line of if else statement
