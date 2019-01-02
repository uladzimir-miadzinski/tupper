import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { addByModule } from '../actions/add';
import { subtractByModule } from '../actions/subtract';
import { halfCompareTapper } from '../actions/tapper';

@Injectable({
  providedIn: 'root'
})
export class TupperService {
  
  public k: BehaviorSubject<string> = new BehaviorSubject('0');
  private step = '17';
  
  constructor() {
  }
  
  public calculateNextGraphic(k: string) {
    const bottom = k;
    const top = addByModule(k, '17');
    const tmpGraphic = [];
    const nextGraphic = [];
    
    for (let y = bottom; subtractByModule(top, y) !== '0'; y = addByModule(y, '1')) {
      const cols = [];
      for (let x = 0; x <= 106; x++) {
        cols.push(halfCompareTapper(x.toString(), y) ? 'X' : '_');
      }
      tmpGraphic.push({
        y,
        cols
      });
    }
    
    for (let i = 0; i < tmpGraphic.length; i++) {
      nextGraphic.push({
        y: tmpGraphic[tmpGraphic.length - 1 - i].y,
        cols: tmpGraphic[i].cols.reverse()
      });
    }
    
    return nextGraphic;
  }
  
  private incrementedK(): string {
    return addByModule(this.k.value, this.step);
  }
  
  private decrementedK(): string {
    return subtractByModule(this.k.value, this.step);
  }
  
  public incrementK(): void {
    this.k.next(this.incrementedK());
  }
  
  public decrementK(): void {
    const decrementedK = this.decrementedK();
    this.k.next(decrementedK === `-${this.step}` ? '0' : decrementedK);
  }
}
