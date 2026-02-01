import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './hero/hero';
import { Bio } from './bio/bio';
import { Skills } from './skills/skills';
import { Projects } from './projects/projects';
import { Footer } from './footer/footer';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hero, Bio, Skills, Projects, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
