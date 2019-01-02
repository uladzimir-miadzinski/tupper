import { Component } from '@angular/core';
import { TupperService } from './services/tupper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(private tupperService: TupperService) {
  }
  
  getCurrentTupperK() {
    return this.tupperService.k.getValue();
  }
  
}
