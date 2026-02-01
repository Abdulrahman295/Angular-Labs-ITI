import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skill1Name: string = 'Skill One';
  skill1Level: number = 90;
  skill2Name: string = 'Skill Two';
  skill2Level: number = 85;
  skill3Name: string = 'Skill Three';
  skill3Level: number = 95;
}
