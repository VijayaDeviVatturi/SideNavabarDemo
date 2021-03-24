import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardscreenComponent } from './dashboardscreen/dashboardscreen.component';
import { DetailsscreenComponent } from './DetailsScreen/detailsscreen/detailsscreen.component';
import { ProjectdetailsComponent } from './ProjectDetails/projectdetails/projectdetails.component';
// import { SidenavabarComponent } from './sidenavabar/sidenavabar.component';

const routes: Routes = [
  {path:'',component:DashboardscreenComponent},
   {path:'details', component:DetailsscreenComponent},
   {path:'projectdetails',component:ProjectdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
