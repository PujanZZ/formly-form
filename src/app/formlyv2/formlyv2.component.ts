import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-formlyv2',
  templateUrl: './formlyv2.component.html',
  styleUrls: ['./formlyv2.component.css'],
})
export class Formlyv2Component implements OnInit {
  form = new FormGroup({
    key: new FormControl(''),
    typeOfField: new FormControl(''),
    props: new FormGroup({
      label: new FormControl(''),
      placeholder: new FormControl(''),
      description: new FormControl(''),
      is_required: new FormControl(false),
    }),
    options: new FormArray([]),
  });

  form2 = new FormGroup({});

  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    // {
    //   key: this.form.get('key').value,
    //   type: this.form.get('typeOfField').value,
    //   props: {
    //     label: this.form.get(['props', 'label']).value,
    //     placeholder: this.form.get(['props', 'placeholder']).value,
    //     description: this.form.get(['props', 'description']).value,
    //     required: this.form.get(['props', 'is_required']).value,
    //   },
    // },
  ];

  listInput: string[] = ['input', 'textarea', 'selector', 'radio'];

  constructor() {
    this.form.valueChanges.subscribe(() => {
      this.fields = [
        {
          key: this.form.get('key').value,
          type: this.form.get('typeOfField').value,
          props: {
            label: this.form.get(['props', 'label']).value,
            placeholder: this.form.get(['props', 'placeholder']).value,
            description: this.form.get(['props', 'description']).value,
            required: this.form.get(['props', 'is_required']).value,
          },
        },
      ];
    });
  }

  ngOnInit() {}

  onSubmit() {
    console.log(this.form);
  }

  onAccept() {
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
