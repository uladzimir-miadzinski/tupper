import { Component } from '@angular/core';
import { TapperService } from './services/tapper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(private tapperService: TapperService) {
  }
  
  getCurrentTapperK() {
    return this.tapperService.k.getValue();
  }
  
}
