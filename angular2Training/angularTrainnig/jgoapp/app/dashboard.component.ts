import { Component, OnInit} from '@angular/core';
import { Developer } from './developer';
import { DeveloperService } from './developer.service';
@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/views/dashboard.component.html',
})
export class DashboardComponent implements OnInit{ 
	developers: Developer[];
	constructor(private developerService: DeveloperService) { }

	ngOnInit(){
		 this.developerService.getDevelopers().then(developers => this.developers = developers.slice(1,6));

	}
	gotoDetail(){ /* not implemented yet */}
}
