import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { Flower } from '../model/Flower';

@Component({
  selector: 'app-add-flower',
  templateUrl: './add-flower.component.html',
  styleUrls: ['./add-flower.component.css']
})
export class AddFlowerComponent implements OnInit {
  userFormGroup: FormGroup;
  f: Flower;

  constructor() { }

  ngOnInit(): void {
  }

  addFlower(){
    // this.f.category = this.userFormGroup.value.category;
    // this.f.category = this.userFormGroup.value.category;
    // this.f.category = this.userFormGroup.value.category;
    // this.f.category = this.userFormGroup.value.category;
    // this.f.category = this.userFormGroup.value.category;
    // this.f.category = this.userFormGroup.value.category;
    // this.f.category = this.userFormGroup.value.category;

  }

}
