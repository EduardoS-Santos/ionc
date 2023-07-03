import { Component } from '@angular/core';
import { environment } from './../environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public env = environment;
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Sobre', url: '/about', icon: 'information-circle' },
    { title: 'Contato', url: '/contacts', icon: 'chatbubbles' }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
