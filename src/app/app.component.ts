import { Component } from '@angular/core';
import { text } from '@angular/core/src/render3';
// import {NavItem} from './nav-item';
// import {NavService} from './nav.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isText: boolean = false;
  isProject: boolean = false;
  isSettings: boolean = false;
  title = 'DEMO';
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  isMenuOpen = true;
   contentMargin = 240;
  // openText: boolean;
   constructor() {
  }
  // task: string[] = [
  //   'Clearning out my closet', 'Take out trash bins', 'Wash car', 'Tank up the motorcycles', 'Go for flight training'
  // ]

  // onToolbarMenuToggle() {
  //   console.log('On toolbar toggled', this.isMenuOpen);
  //   this.isMenuOpen = !this.isMenuOpen;

  //   if(!this.isMenuOpen) {
  //     this.contentMargin = 70;
  //   } else {
  //     this.contentMargin = 240;
  //   }
  // }
  // clcikdashboard(id){
  //   console.log(id)
    
  // }
  // sidenavEvents(str) {
  //   console.log(str);
  // }

  onToolbarMenuToggle() {
    console.log('On toolbar toggled', this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;

    if(!this.isMenuOpen) {
      this.contentMargin = 70;
    } else {
      this.contentMargin = 240;
    }
  }
  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
  openMenu(){
   this.isText=!this.isText;
  //  this.isProject=!this.isProject
    // console.log("sd")
  }
  openMenu1(){
    // this.isText=!this.isText;
    this.isProject=!this.isProject
     // console.log("sd")
   }
   openMenu2(){
       this.isSettings=!this.isSettings
   }
}
