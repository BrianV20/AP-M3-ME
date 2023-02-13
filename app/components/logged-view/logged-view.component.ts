import { Component } from '@angular/core';

@Component({
  selector: 'app-logged-view',
  templateUrl: './logged-view.component.html',
  styleUrls: ['./logged-view.component.css']
})
export class LoggedViewComponent {
  bannerImgSrc = 'assets/BannerLaura.jpg';
  userImgSrc = 'assets/UserImgAB.jpg';

  experience_1 = 'assets/youtube.png';
  experience_2 = 'assets/letterboxd.png';
  experience_3 = 'assets/netflix.png';

  education_1 = 'assets/UTN_logo.jpg';
  education_2 = 'assets/UTN_logo.jpg';
}
