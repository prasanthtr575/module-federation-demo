import { RouterModule, Routes } from '@angular/router'; // CLI imports router

import { NgModule } from '@angular/core';
import { TestComponent } from './test/test.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [{
  path: '',
  loadChildren: () => loadRemoteModule({
    remoteEntry: 'http://localhost:8300/remoteEntry.js',
    remoteName: 'remote',
    exposedModule: './ComponentsModule'
})
    .then(m => m.ComponentsModule
    )
},{
  path: 'about',
  loadChildren: () => loadRemoteModule({
    remoteEntry: 'http://localhost:8400/remoteEntry.js',
    remoteName: 'remote2',
    exposedModule: './AboutModule'
})
    .then(m => m.AboutModule
    )
}]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }