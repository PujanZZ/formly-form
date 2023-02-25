import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-formlyv2',
  templateUrl: './formlyv2.component.html',
  styleUrls: ['./formlyv2.component.css'],
})
export class Formlyv2Component implements OnInit {
  form = new FormGroup({
    field_type: new FormControl(),
    field_type2: new FormControl(),
    textareaField: new FormControl(),
    option: new FormArray([]),
    is_required: new FormControl(''),
    radio_button: new FormControl(''),
    multi_select: new FormControl(''),
  });

  model = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [];

  listInput: string[] = ['input', 'textarea'];

  constructor() {}

  ngOnInit() {}

  get option() {
    return this.form.controls['option'] as FormArray;
  }

  addOptions() {
    this.option.push(new FormControl(''));
  }

  removeOptions(index: number) {
    this.option.removeAt(index);
  }
}
