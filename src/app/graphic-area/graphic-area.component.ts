import { Component, OnInit } from '@angular/core';
import {TapperService} from '../services/tapper.service';

@Component({
  selector: 'app-graphic-area',
  templateUrl: './graphic-area.component.html',
  styleUrls: ['./graphic-area.component.scss']
})
export class GraphicAreaComponent implements OnInit {

  constructor(public tapperService: TapperService) { }

  ngOnInit() {
  }

}
