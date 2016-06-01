import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { Developer } from './developer';
import { DeveloperDetailComponent } from './developer-detail.component';
import { DeveloperService } from './developer.service';

@Component({
  selector: 'my-developers',
  templateUrl:'views/developer.component.htmls',
  styleUrl: ['styles/developer.componet.css'],
  directives: [DeveloperDetailComponent],
})
export class DevelopersComponent implements OnInit {
  developers: Developer[];
  selectedDeveloper: Developer;

  constructor(
  private router: Router,
  private developerService: DeveloperService) { }

  getDevelopers() {
    this.developerService.getDevelopers().then(developers => this.developers = developers);
  }

  ngOnInit() {
    this.getDevelopers();
  }

  onSelect(developer: Developer) { this.selectedDeveloper = developer; }

  gotoDetail(){ 
  let link =['DeveloperDetail', {id:developer.id}];
  this.router.navigate(link);
  }
}
