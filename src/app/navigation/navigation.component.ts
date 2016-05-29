import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Output() selectmenu = new EventEmitter();
  constructor() {}

  ngOnInit() {
  }

  menuSelected(param) {
    this.selectmenu.emit({value:param})
  }

}
