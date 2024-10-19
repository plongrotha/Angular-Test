import { Component, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  userName: string = 'rotha';
  e: string = '';
  oneway: string = 'this is value';

  updateUser(userName: HTMLInputElement) {
    this.userName = userName.value;
    console.log(this.userName);
  }

  onkeyUp() {
    console.log(this.oneway);
  }
}
