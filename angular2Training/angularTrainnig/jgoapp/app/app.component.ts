import { Component} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { DevelopersComponent } from './developers.component';
import { DeveloperDetailComponent } from './developer-detail.component';
import { DeveloperService } from './developer.service';
import { DashboardComponent } from './dashboard.component';

@Component({
	
  selector: 'my-app',
  template:`
  <h1>{{title}}</h1>
  <nav>
  <a [routerLink]="['Dashboard']">Dashboard</a>
  <a [routerLink]="['Developers']">Developers</a>
  
  </nav>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['styles/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, DeveloperService]
})
@RouteConfig([
  {
    path: '/developers',
    name: 'Developers',
    component: DevelopersComponent
  },{
  path: '/dashboard',
  name: 'Dashboard',
  component: DashboardComponent,
  useAsDefault: true
},{
  path: '/detail/:id',
  name: 'DeveloperDetail',
  component: DeveloperDetailComponent,

},
])

export class AppComponent{
	title = 'Developers app with routes';

}