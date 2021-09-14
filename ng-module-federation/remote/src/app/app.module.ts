import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from './components/components.module'
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
