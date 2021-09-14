import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const COMP_ROUTES: Routes = [
  {
    path: '',
    component: AboutComponent
  }
];

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(COMP_ROUTES)
  ],
  exports: [
    AboutComponent
  ]
})
export class AboutModule { }
