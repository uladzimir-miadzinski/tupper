import { Component, OnInit } from '@angular/core';
import {TupperService} from '../services/tupper.service';

@Component({
  selector: 'app-graphic-area',
  templateUrl: './graphic-area.component.html',
  styleUrls: ['./graphic-area.component.scss']
})
export class GraphicAreaComponent implements OnInit {

  constructor(public tapperService: TupperService) { }

  ngOnInit() {
  }

}
