import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent implements OnInit {
  isDark: boolean = false;
  @Output() onThemeChanged: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
  }


  getIcon() {
    return this.isDark ? 'brightness_high' : 'wb_sunny'
  }

}
