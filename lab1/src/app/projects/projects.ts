import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  project1Name: string = 'Project One';
  project1Description: string = 'A short description of project one.';
  project2Name: string = 'Project Two';
  project2Description: string = 'A short description of project two.';
  project3Name: string = 'Project Three';
  project3Description: string = 'A short description of project three.';
}
