import { Component } from '@angular/core';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  faMoon = faMoon;
  faSun = faSun;
  title = 'nostrdd';

  currentYear = new Date().getFullYear();

  isDarkMode: boolean = false;

  ngOnInit() {
    this.isDarkMode = localStorage.getItem('darkMode') === 'true';
    this.setDarkMode(this.isDarkMode);
  }

  setDarkMode(isDarkMode: boolean) {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDarkMode.toString());
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.setDarkMode(this.isDarkMode);
  }
}
