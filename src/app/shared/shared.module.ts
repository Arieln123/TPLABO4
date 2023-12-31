import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    ErrorComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavBarComponent,
    FooterComponent,
    ErrorComponent,
    
  ]
})
export class SharedModule { }
