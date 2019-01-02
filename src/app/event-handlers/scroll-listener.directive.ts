import {Directive, HostListener} from '@angular/core';
import {TupperService} from "../services/tupper.service";

@Directive({
  selector: '[appScrollListener]'
})
export class ScrollListenerDirective {

  constructor(private tapperService: TupperService) { }
  
  @HostListener('mousewheel', ['$event'])
  onMouseWheel(e) {
    if (e.deltaY < 0) {
      this.tapperService.incrementK();
    } else {
      this.tapperService.decrementK();
    }
    console.log(this.tapperService.k.value);
    console.log('button', e, 'number of clicks:', this.tapperService.k);
  }
}
