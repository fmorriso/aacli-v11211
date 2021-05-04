import { Component, VERSION as ngVersion } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'aacli-v11211';
  public get angularVersion(): string {
    return ngVersion.full;
  }
}
