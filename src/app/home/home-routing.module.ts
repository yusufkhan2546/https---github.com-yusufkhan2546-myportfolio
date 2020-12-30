import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomePage } from './home.page';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SkillsComponent } from './skills/skills.component';
import { WorksComponent } from './works/works.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[{
      path:'',
      component:LandingpageComponent
    },

    {
      path:'about',
      component:AboutComponent,
    },
    {
      path:'skills',
      component:SkillsComponent,
    },
    {
      path:'works',
      component:WorksComponent
    },
    {
      path:'contact',
      component:ContactComponent
    }]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
