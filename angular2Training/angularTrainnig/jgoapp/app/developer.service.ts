import { Injectable } from '@angular/core';
import { Developer } from './developer';
import { DEVELOPERS } from './mock-developers';
@Injectable()
export class DeveloperService {
	getDevelopers(){
		return Promise.resolve(DEVELOPERS);



	}
	getDeveloper(id: number) {
  return Promise.resolve(DEVELOPERS).then(
    developers => developers.filter(developer => developer.id === id)[0]
  );
}


	getHeroesSlowly() {
    return new Promise<Developer[]>(resolve =>
      setTimeout(()=>resolve(DEVELOPERS), 2000) // 2 seconds
    );
  }
}