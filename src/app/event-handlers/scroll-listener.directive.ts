import {Directive, HostListener} from '@angular/core';
import {TapperService} from "../services/tapper.service";

@Directive({
  selector: '[appScrollListener]'
})
export class ScrollListenerDirective {

  constructor(private tapperService: TapperService) { }
  
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
