import { Component, OnInit} from '@angular/core';
import { Developer } from './developer';
import { DeveloperService } from './developer.service';
import { Router } from '@angular/router-deprecated';
@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/views/dashboard.component.html',
  styleUrls: ['styles/dashboard.component.css'],
})
export class DashboardComponent implements OnInit{ 
	developers: Developer[]=[];
	constructor(
	private router: Router,
	private developerService: DeveloperService) { }

	ngOnInit(){
		 this.developerService.getDevelopers().then(developers => this.developers = developers.slice(1,6));

	}
	gotoDetail(developer:Developer){ 
	let link =['DeveloperDetail', {id:developer.id}];
	this.router.navigate(link);
	}
}
