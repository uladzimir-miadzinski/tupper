import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TupperService } from '../services/tupper.service';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.scss']
})
export class VirtualScrollComponent implements OnInit {
  
  constructor(private tupperService: TupperService) {
  }
  
  rows: BehaviorSubject<string[]> = new BehaviorSubject([]);
  
  ngOnInit() {
    this.rows.next(this.tupperService.calculateNextGraphic('0'));
  }
  
  onMouseWheel(event: WheelEvent) {
    this.changeTapperK(event.wheelDeltaY);
    
    const nextGraphic = this.tupperService.calculateNextGraphic(this.tupperService.k.getValue());
    this.rows.next(nextGraphic);
  }
  
  changeTapperK(deltaY: number) {
    if (deltaY > 0) {
      // wheel up
      this.tupperService.incrementK();
    } else {
      // wheel down
      this.tupperService.decrementK();
    }
  }
  
}
