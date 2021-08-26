import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent implements OnInit {
  isDark: boolean = false;
  btn_name:string = 'Light Theme'; 
  @Output() onThemeChanged: EventEmitter<any> = new EventEmitter<boolean>();

  ngOnInit() {
  }


  getIcon() {
    return this.isDark ? 'brightness_high' : 'wb_sunny'
  }

  onSwitch(){
    this.onThemeChanged.emit(!this.isDark)
    this.isDark=!this.isDark;
    this.btn_name = this.isDark ? 'Dark Theme' : 'Light Theme'
  }
}
