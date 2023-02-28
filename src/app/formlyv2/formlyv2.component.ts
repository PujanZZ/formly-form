import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { combineLatest } from 'rxjs';

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
    option_extra: new FormArray([]),
    select_multiple: new FormControl(false),
    validation: new FormGroup({
      message: new FormGroup({
        pattern: new FormControl(''),
      }),
    }),
  });

  form2 = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [];

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
            options: (
              (this.form.get('option_extra') as FormArray)
                .controls as FormGroup[]
            ).map((v) => v.value),
            multiple: this.form.get('select_multiple').value,
            validation: {
              messages: {
                pattern: this.form.get(['validation', 'message', 'pattern'])
                  .value,
              },
            },
          },
        },
      ];
    });
  }

  ngOnInit() {}

  onAccept() {
    console.log(this.fields);
  }

  get optionArr() {
    return (this.form.get('option_extra') as FormArray).controls as FormGroup[];
  }

  get input() {
    return this.form.controls['field_type'] as FormControl;
  }

  clearFields() {
    this.form.patchValue({
      key: '',
      typeOfField: '',
      props: {
        label: '',
        placeholder: '',
        description: '',
        is_required: false,
      },
      option_extra: [],
    });
  }

  addOptions() {
    const index = new FormGroup({
      value: new FormControl(''),
      label: new FormControl(''),
      disabled: new FormControl(false),
    });
    (this.form.get('option_extra') as FormArray).push(index);
  }

  removeOptions(index: number) {
    if (this.optionArr.length > 0) {
      (this.form.get('option_extra') as FormArray).removeAt(index);
    }
  }
}
