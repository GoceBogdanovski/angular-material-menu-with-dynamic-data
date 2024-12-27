import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { MenuComponent } from './app/components/menu/menu.component';
import { getMenuData } from './app/infrastructure/services/menu.service';
import { provideRouter } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [MenuComponent],
  template: `<app-menu [data]="getMenuData()" [isMenuTriggerIcon]="true"></app-menu>`,
})
export class App {
  public getMenuData() {
    return getMenuData();
  }
}

bootstrapApplication(App, {
  providers: [provideRouter([])],
});
