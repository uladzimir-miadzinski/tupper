import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {addByModule} from "../actions/add";
import {subtractByModule} from "../actions/subtract";

@Injectable({
  providedIn: 'root'
})
export class TapperService {
  
  public k: BehaviorSubject<string> = new BehaviorSubject('0');
  
  constructor() { }
  
  public incrementedK(): string {
    return addByModule(this.k.value, '1');
  }
  
  public decrementedK(): string {
    return subtractByModule(this.k.value, '1');
  }
  
  public incrementK(): void {
    this.k.next(this.incrementedK());
  }
  
  public decrementK(): void {
    const decrementedK = this.decrementedK();
    this.k.next(decrementedK === '-1' ? '0' : decrementedK);
  }
}
