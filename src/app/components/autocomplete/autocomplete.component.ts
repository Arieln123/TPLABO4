import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { colorentity } from 'src/app/Entity/colorentity';
import { MasterService } from 'src/app/core/services/master.service';
import { AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { User } from 'src/app/core/Models';
import { ApiService } from 'src/app/core/services/api.service';
@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

 
  formcontrol = new FormControl('');
  public users: Array<User> = [];

  filteroptionslist!: Observable<User[]>

  constructor(private service: MasterService,private apiService:ApiService) {
  }

  ngOnInit(): void {
    // this.filteroptions = this.formcontrol.valueChanges.pipe(
    //   startWith(''), map(value => this._FILTER(value || ''))
    // )
    this.apiService.getUsers().subscribe((data:any)=>{
        this.users=data;
      })


    this.filteroptionslist = this.formcontrol.valueChanges.pipe(
      startWith(''), map(value => this._LISTFILTER(value || ''))
    )
  }

  private _FILTER(value: string): User[] {
    const searchValue = value.toLocaleLowerCase();
    return this.users.filter(user => user.nombre.toLocaleLowerCase().includes(searchValue) || user.dni.toLocaleLowerCase().includes(searchValue));
  }

  private _LISTFILTER(value: string): User[] {
    const searchValue = value.toLocaleLowerCase();
    return this.users.filter(user => user.nombre.toLocaleLowerCase().includes(searchValue) || user.dni.toLocaleLowerCase().includes(searchValue));
  
  }


}