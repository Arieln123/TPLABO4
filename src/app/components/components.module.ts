import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home/home.component';
import { AddVehiculoComponent } from './home/add-vehiculo/add-vehiculo.component';
import { EditVehiculoComponent } from './home/edit-vehiculo/edit-vehiculo.component';
import { ViewVehiculoComponent } from './home/view-vehiculo/view-vehiculo.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ParkingComponent } from './home/parking/parking.component';
import { CreateParkingComponent } from './home/create-parking/create-parking.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    declarations: [
        LandingComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        AddVehiculoComponent,
        EditVehiculoComponent,
        ViewVehiculoComponent,
        ContactFormComponent,
        ParkingComponent,
        CreateParkingComponent,
    ],
    exports: [],
    imports: [
        CommonModule,
        ComponentsRoutingModule,
        SharedModule,
        FormsModule,
        HttpClientModule,
        BrowserModule,

    ]
})
export class ComponentsModule { }
