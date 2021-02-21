import { Component, OnInit } from '@angular/core';
import {  FormGroup,
  FormControl,
  FormBuilder
} from '@angular/forms';
import { HttpClientService } from '../service/http-client.service';
import { User } from '../model/User';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  userFormGroup: FormGroup;
  newUser: User;

  constructor(private formBuilder: FormBuilder,
              private userService: HttpClientService ) { }

  ngOnInit(): void {
    this.userFormGroup = this.formBuilder.group({title: [''] ,
    fname: [''] , lname: [''] , email: [''] , phone: [''] , city: [''] , country: [''] , password: [''] });
  }

  addUser(){
    console.log(this.userFormGroup.value);
    this.newUser = new User();
    this.newUser.title = this.userFormGroup.value.title;
    this.newUser.fname = this.userFormGroup.value.fname;
    this.newUser.lname = this.userFormGroup.value.lname;
    this.newUser.email = this.userFormGroup.value.email;
    this.newUser.city = this.userFormGroup.value.city;
    this.newUser.country = this.userFormGroup.value.country;
    this.newUser.phone = this.userFormGroup.value.phone;
    this.newUser.password = this.userFormGroup.value.password;
    console.log(this.newUser);
    this.userService.addUser(this.newUser);
  }


}
