import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  carForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  // ngOnInit() {
  //   this.carForm = new FormGroup({
  //     name: new FormControl(),
  //     email: new FormControl(), //obj 2 form controls of form group
  //     skills: new FormGroup({
  //       skillName: new FormControl(),
  //       experienceInYears: new FormControl(),
  //       level: new FormControl(),
  //     }),
  //   });
  // }
  getErrorMessage() {
    if (this.carForm.hasError('required')) {
      return 'You must enter a value';
    }

    return this.carForm.hasError('email') ? 'Not a valid email' : '';
  }

  //using formbuilder class
  ngOnInit() {
    this.carForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      skills: this.fb.group({
        skillName: [''],
        experienceInYears: [''],
        level: [''],
      }),
    });
  }

  onSubmit(): void {
    console.log(this.carForm);
    //console.log(this.carForm.controls.name.status);
    //console.log(this.carForm.get('email').touched);  //.value etc

    console.log(this.carForm.get('skills').value.level);
  }

  //setvalue for all values,patchvalue to update subset

  onLoad(): void {
    this.carForm.patchValue({
      name: 'xyz',
      email: 'xyz@gmail.com',
      skills: {
        skillName: 'Cricket',
        experienceInYears: '5',
        level: 'Easy',
      },
    });
  }
}
