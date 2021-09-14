import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'host1';

  ngOnInit() {
    /* loadRemoteModule({
      remoteEntry: 'http://localhost:5000/remoteEntry.js',
      remoteName: 'remote',
      exposedModule: './ComponentsModule'
  })
      .then(m => {
        console.log(m.ComponentsModule)
      }) */
  }
}
