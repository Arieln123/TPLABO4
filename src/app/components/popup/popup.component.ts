import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MasterService } from 'src/app/core/services/master.service';


@Component({
  selector: 'app-popup',
  templateUrl: 'popup.component.html',
  styleUrls: ['popup.component.css']
})
export class PopupComponent implements OnInit {
  inputdata: any;
  editdata: any;
  closemessage = 'closed using directive'
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<PopupComponent>, private buildr: FormBuilder,
    private service: MasterService) {

  }
  ngOnInit(): void {
    this.inputdata = this.data;
    if(this.inputdata.code>0){
      this.setpopupdata(this.inputdata.code)
    }
  }

  setpopupdata(code: any) {
    this.service.GetUserbycode(code).subscribe(item => {
      this.editdata = item;
      this.myform.setValue({
        nombre:this.editdata.nombre,
        apellido:this.editdata.apellido,
        dni:this.editdata.dni,
        email:this.editdata.email,
        password:this.editdata.password,
      isAdmin:this.editdata.isAdmin})
    });
  }

  closepopup() {
    this.ref.close('Closed using function');
  }

  myform = this.buildr.group({
    nombre: this.buildr.control(''),
    apellido: this.buildr.control(''),
    dni: this.buildr.control(''),
    email: this.buildr.control(''),
    password: this.buildr.control(''),
    isAdmin: this.buildr.control(true)
  });

  Saveuser() {
    this.service.SaveUser(this.myform.value).subscribe(res => {
      this.closepopup();
    });
  }
}