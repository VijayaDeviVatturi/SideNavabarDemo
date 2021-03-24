import { NgModule } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatBadgeModule,
    MatCardModule,MatSelectModule
} from '@angular/material';


@NgModule({
    
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        MatBadgeModule,
        MatCardModule,
        MatSelectModule,
        MatExpansionModule,
        
    ],
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        MatBadgeModule,
        MatCardModule,
        MatSelectModule
    ]    
  })
  export class MaterialModule { }