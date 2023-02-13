import { NgModule } from '@angular/core';
import { RouterModule, Routes, NavigationEnd } from '@angular/router';
import { ExpAndEduComponent } from './components/exp-and-edu/exp-and-edu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoggedViewComponent } from './components/logged-view/logged-view.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: HeaderComponent},
  { path: '', component: UserInfoComponent, outlet: 'user-info'},
  { path: '', component: ExpAndEduComponent, outlet: 'exp-and-edu'},
  { path: '', component: SkillsComponent, outlet: 'skills'},
  { path: '', component: ProjectsComponent, outlet: 'projects'},
  { path: '', component: FooterComponent, outlet: 'footer'},
  { path: '', component: LoginComponent, outlet: 'login'},


  {path: 'LoggedView', component: LoggedViewComponent},
  // {path: 'LoggedView', redirectTo: '/LoggedView', pathMatch: 'full'},
  // {path: 'projects', component: ProjectsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
