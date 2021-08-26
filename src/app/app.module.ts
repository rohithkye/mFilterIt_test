import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {ThemeSwitcherComponent} from './theme-switcher/theme-switcher.component';
import {BlogComponent} from "./blog/blog.component";

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    ThemeSwitcherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
