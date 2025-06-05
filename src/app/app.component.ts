import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './compartidos/nav/nav.component';
import { FooterComponent } from './compartidos/footer/footer.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, NavComponent, FooterComponent] 
})
export class AppComponent {
  title = 'mi-tienda'; 
}
