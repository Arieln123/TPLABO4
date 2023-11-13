import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from "../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home/home.component';
import { AddVehiculoComponent } from './home/add-vehiculo/add-vehiculo.component';
import { EditVehiculoComponent } from './home/edit-vehiculo/edit-vehiculo.component';
import { ViewVehiculoComponent } from './home/view-vehiculo/view-vehiculo.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ParkingComponent } from './home/parking/parking.component';
import { CreateParkingComponent } from './home/create-parking/create-parking.component';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material-module';
import { PopupComponent } from './popup/popup.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';


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
        PopupComponent,
        ContactFormComponent,
        AutocompleteComponent
        
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
        MatAutocompleteModule,
        AsyncPipe,
        
    

    ]
})
export class ComponentsModule { }
