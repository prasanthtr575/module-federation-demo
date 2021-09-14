import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PanelComponent } from './panel/panel.component';

const COMP_ROUTES: Routes = [
  {
    path: '',
    component: PanelComponent
  }
];

@NgModule({
  declarations: [
    PanelComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(COMP_ROUTES)
  ],
  exports: [
    PanelComponent
  ]
})
export class ComponentsModule { }
