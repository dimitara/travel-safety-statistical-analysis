import { Component } from '@angular/core';
import { IntroComponent } from './+intro';
import { RouteConfig, RouterOutlet, Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { RawStatsComponent } from './+raw-stats';
import { NavigationComponent } from './navigation';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdButton } from '@angular2-material/button';

@Component({
  moduleId: module.id,
  selector: 'statistical-analysis-app',
  templateUrl: 'statistical-analysis.component.html',
  styleUrls: ['statistical-analysis.component.css'],
  directives: [ROUTER_DIRECTIVES, NavigationComponent, MD_SIDENAV_DIRECTIVES, MdToolbar, MdButton]
})
@RouteConfig([
  {path: '/intro', component: IntroComponent, as: 'Intro'},
  {path: '/raw-stats', component: RawStatsComponent, as: 'RawStats'}
])
export class StatisticalAnalysisAppComponent {
  constructor(private router: Router) {} 
  title = 'TSSA';

  selectMenu(type){
    this.router.navigate([type.value]);
  }
}
