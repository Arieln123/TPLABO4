import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from "../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home/home.component';
import { EditVehiculoComponent } from './home/edit-vehiculo/edit-vehiculo.component';
import { ViewVehiculoComponent } from './home/view-vehiculo/view-vehiculo.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ParkingComponent } from './home/parking/parking.component';
import { CreateParkingComponent } from './home/create-parking/create-parking.component';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material-module';
import { PopupComponent } from './popup/popup.component';
import { AddVehicle } from './home/add-vehiculo/add-vehiculo.component';


@NgModule({
    declarations: [
        LandingComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        EditVehiculoComponent,
        ViewVehiculoComponent,
        ContactFormComponent,
        ParkingComponent,
        CreateParkingComponent,
        PopupComponent,
        ContactFormComponent,
        AddVehicle,
    ],
    exports: [],
    imports: [
        CommonModule,
        ComponentsRoutingModule,
        SharedModule,
        FormsModule,
        HttpClientModule,
        BrowserModule,
        MaterialModule,
        ReactiveFormsModule,
    ]
})
export class ComponentsModule { }
