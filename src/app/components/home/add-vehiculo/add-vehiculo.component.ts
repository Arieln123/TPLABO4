import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MasterService } from 'src/app/core/services/master.service';


@Component({
  selector: 'app-add-vehiculo',
  templateUrl: 'add-vehiculo.component.html',
  styleUrls: ['add-vehiculo.component.css']
})
export class AddVehicle implements OnInit {
  inputdata: any;
  editdata: any;
  closemessage = 'closed using directive'
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<AddVehicle>, private buildr: FormBuilder,
    private service: MasterService) {

  }
  ngOnInit(): void {
    this.inputdata = this.data;
    if(this.inputdata.code>0){
      this.setpopupdata(this.inputdata.code)
    }
  }

  setpopupdata(code: any) {
    this.service.GetVehiclebycode(code).subscribe(item => {
      this.editdata = item;
      this.myform.setValue({
        marca:this.editdata.marca,
        modelo:this.editdata.modelo,
        patente:this.editdata.patente,
        color:this.editdata.color,
      })
    });
  }

  closepopup() {
    this.ref.close('Closed using function');
  }

  myform = this.buildr.group({
    marca: this.buildr.control(''),
    modelo: this.buildr.control(''),
    patente: this.buildr.control(''),
    color: this.buildr.control(''),
  });

  SaveVehicle() {
    this.service.SaveVehicle(this.myform.value).subscribe(res => {
      this.closepopup();
    });
  }
}
