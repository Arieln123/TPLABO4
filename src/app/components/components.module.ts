import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from "../shared/shared.module";


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
        SharedModule
    ]
})
export class ComponentsModule { }
