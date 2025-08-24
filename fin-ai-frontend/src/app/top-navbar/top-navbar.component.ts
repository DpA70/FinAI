import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-top-navbar',
  standalone: true,
  imports: [CommonModule,MatButtonModule,MatToolbarModule,MatIconModule,MatCardModule,MatTabsModule,MatFormFieldModule,MatInputModule,MatSlideToggleModule],
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent {
  
  currentTheme = 'light-theme'; // initial theme

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'dark-theme' ? 'light-theme' : 'dark-theme';
    document.body.classList.toggle('dark-theme');
  }

}
