import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-formlyv2',
  templateUrl: './formlyv2.component.html',
  styleUrls: ['./formlyv2.component.css'],
})
export class Formlyv2Component implements OnInit {
  form = new FormGroup({
    field_type: new FormControl(),
    textareaField: new FormControl(),
    option: new FormArray([]),
    is_required: new FormControl(),
    is_checked: new FormControl(false),
    radio_button: new FormControl(''),
    multi_select: new FormControl(''),
  });

  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'InputField',
      type: 'input',
      props: {
        label: 'Input Field',
        placeholder: '',
        description: 'Description',
        required: this.form.controls['is_checked'].value,
      },
    },
  ];

  listInput: string[] = ['input', 'textarea', 'selector', 'radio'];

  constructor() {
    this.form.controls['is_required'].valueChanges.subscribe((value) => {
      const fieldControl = this.form.get('field_type');
      const textareaControl = this.form.get('textareaField');

      if (value == 'false') {
        fieldControl.setValidators([Validators.required]);
        textareaControl.setValidators([Validators.required]);
      } else {
        fieldControl.clearValidators();
        textareaControl.clearValidators();
      }

      fieldControl.updateValueAndValidity();
      textareaControl.updateValueAndValidity();
    });
  }

  ngOnInit() {}

  submit(model: any): void {
    console.log(this.model);
  }

  get option() {
    return this.form.controls['option'] as FormArray;
  }

  get input() {
    return this.form.controls['field_type'] as FormControl;
  }

  addOptions() {
    this.option.push(new FormControl());
  }

  removeOptions(index: number) {
    this.option.removeAt(index);
  }
}
