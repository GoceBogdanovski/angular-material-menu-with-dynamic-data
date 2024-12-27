import { Component, model } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuModel } from '../../infrastructure/models/menu.model';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  imports: [MatButtonModule, MatIconModule, MatMenuModule, RouterModule],
})
export class MenuComponent {
  public data = model<MenuModel[]>([]);
  public isMenuTriggerIcon = model(false);
  public triggerName = model('');
  public triggerId = model(0);
}
