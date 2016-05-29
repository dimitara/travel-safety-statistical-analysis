import { Component, OnInit, ElementRef } from '@angular/core';
import {Scatterplot} from '../directives/charts/scatterplot.directive';
import * as d3 from 'd3';

@Component({
  moduleId: module.id,
  selector: 'app-raw-stats',
  templateUrl: 'raw-stats.component.html',
  styleUrls: ['raw-stats.component.css'],
  directives: [Scatterplot]
})
export class RawStatsComponent implements OnInit {
  elementRef: ElementRef

  constructor(elementRef: ElementRef) {
    this.elementRef = elementRef;
  }

  /*
  afterViewInit(){
      console.log(d3.select(this.elementRef.nativeElement).select("h2"));
    
  }
  */

  ngOnInit() {
  }

}
