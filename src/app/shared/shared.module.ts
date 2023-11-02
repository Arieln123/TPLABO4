import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [
    FooterComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FooterComponent,
    ErrorComponent
    
  ]
})
export class SharedModule { }
