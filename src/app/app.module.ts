import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material-module';
import { DashboardscreenComponent } from './dashboardscreen/dashboardscreen.component';
import { HomdashboardComponent } from './Homedashboard/homdashboard/homdashboard.component';
import { MenuListItemComponent } from './menu-list-item/menu-list-item/menu-list-item.component';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { DetailsscreenComponent } from './DetailsScreen/detailsscreen/detailsscreen.component';
import { ProjectdetailsComponent } from './ProjectDetails/projectdetails/projectdetails.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardscreenComponent,
    HomdashboardComponent,
    MenuListItemComponent,
    DetailsscreenComponent,
    ProjectdetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
