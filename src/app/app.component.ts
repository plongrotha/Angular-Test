import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './Components/footer/footer.component';
import { ChildComponent } from './Components/child/child.component';
import { HeaderComponent } from './Components/header/header.component';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FooterComponent,
    ChildComponent,
    HeaderComponent,
    FormsModule,
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'angulartest';
  username: string = 'rotha';

  isloggin: boolean = false;
  testname: string = 'test name';

  isAdmin: boolean = false;
  isMember: boolean = false;
  isGuest: boolean = true;

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
    console.log(user.id);
  }
}
