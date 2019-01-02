import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TapperService } from '../services/tapper.service';
import { subtractByModule } from '../actions/subtract';
import { addByModule } from '../actions/add';
import { halfCompareTapper } from '../actions/tapper';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.scss']
})
export class VirtualScrollComponent implements OnInit {
  
  constructor(private tapperService: TapperService) {
  }
  
  rows: BehaviorSubject<string[]> = new BehaviorSubject([]);
  
  static calculateNextGraphic(k: string) {
    const bottom = k;
    const top = addByModule(k, '18');
    const nextGraphic = [];
    
    for (let y = bottom; subtractByModule(top, y) !== '0'; y = addByModule(y, '1')) {
      const cols = [];
      for (let x = 0; x <= 106; x++) {
        cols.push(halfCompareTapper(x.toString(), y) ? 'X' : '_');
      }
      nextGraphic.unshift({
        y,
        cols
      });
    }
    
    return nextGraphic;
  }
  
  ngOnInit() {
    const initialGraphic = [];
    for (let y = 17; y >= 0; y--) {
      const cols = [];
      for (let x = 0; x <= 106; x++) {
        cols.push(halfCompareTapper(x.toString(), y.toString()) ? 'X' : '_');
      }
      initialGraphic.push({
        y,
        cols
      });
    }
    this.rows.next(initialGraphic);
  }
  
  onMouseWheel(event: WheelEvent) {
    this.changeTapperK(event.wheelDeltaY);
    
    const nextGraphic = VirtualScrollComponent.calculateNextGraphic(this.tapperService.k.getValue());
    this.rows.next(nextGraphic);
  }
  
  changeTapperK(deltaY: number) {
    if (deltaY > 0) {
      // wheel up
      this.tapperService.incrementK();
    } else {
      // wheel down
      this.tapperService.decrementK();
    }
  }
  
}
