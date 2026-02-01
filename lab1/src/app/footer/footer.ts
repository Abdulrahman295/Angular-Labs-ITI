import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  email: string = 'your.email@example.com';
  facebookUrl: string = 'https://facebook.com/yourprofile';
  githubUrl: string = 'https://github.com/yourprofile';
  linkedinUrl: string = 'https://linkedin.com/in/yourprofile';
}
