import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './Components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angulartest';
  username: string = 'rotha';
  buttonClick() {
    console.log('button clicked');
  }

  // this have event when pressed Enter key
  keyenter(e: any) {
    if (e.keyCode == 13) {
      console.log('Enter key pressed');
    }
  }
  keyupFiltering(user: HTMLInputElement) {
    console.log(user.value);
  }
}
