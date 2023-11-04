import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [
        LandingComponent,
        LoginComponent,
        RegisterComponent,
    ],
    exports: [],
    imports: [
        CommonModule,
        ComponentsRoutingModule,
        SharedModule,
        FormsModule,
        HttpClientModule

    ]
})
export class ComponentsModule { }
