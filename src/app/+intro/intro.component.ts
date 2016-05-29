import { Component, OnInit } from '@angular/core';
import {MdButton} from '@angular2-material/button';
import {RouteConfig, Router} from '@angular/router-deprecated';

@Component({
  moduleId: module.id,
  selector: 'app-intro',
  templateUrl: 'intro.component.html',
  styleUrls: ['intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  goToRawData() {
      this.router.navigate(['raw-data']);
  }

}
