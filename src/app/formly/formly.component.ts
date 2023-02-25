import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-formly',
  templateUrl: './formly.component.html',
  styleUrls: ['./formly.component.css'],
})
export class FormlyComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [];
  option: string;

  list: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  inputForm() {
    this.form = new FormGroup({});
    this.model = {};
    this.options = {};
    this.fields = [
      {
        key: 'Input',
        type: 'input',
        props: {
          label: 'Input (minLength = 10)',
          placeholder: 'Placeholder',
          description: 'Description',
          required: true,
          minLength: 10,
        },
      },
    ];
  }

  textForm() {
    this.form = new FormGroup({});
    this.model = {};
    this.options = {};
    this.fields = [
      {
        key: 'checked',
        type: 'checkbox',
        props: {
          label: 'Required?',
        },
      },
      {
        key: 'Textarea',
        type: 'textarea',
        props: {
          label: 'Text Area',
          placeholder: 'Placeholder',
          description: 'Description',
          required: true,
        },
        validation: {
          show: true,
        },
        expressions: {
          'props.required': 'model.checked',
        },
      },
    ];
  }

  radioForm() {
    this.form = new FormGroup({});
    this.model = {};
    this.options = {};
    this.fields = [
      {
        key: 'Radio',
        type: 'radio',
        props: {
          label: 'Radio',
          placeholder: 'Placeholder',
          description: 'Description',
          required: true,
          options: [
            { value: 1, label: 'Option 1' },
            { value: 2, label: 'Option 2' },
            { value: 3, label: 'Option 3' },
            { value: 4, label: 'Option 4', disabled: true },
          ],
        },
      },
    ];
  }

  multiSelect() {
    this.form = new FormGroup({});
    this.model = {};
    this.options = {};
    this.fields = [
      {
        key: 'select_multi',
        type: 'select',
        props: {
          label: 'Select Multiple',
          placeholder: 'Placeholder',
          description: 'Description',
          required: true,
          multiple: true,
          options: [
            { value: 1, label: 'Option 1' },
            { value: 2, label: 'Option 2' },
            { value: 3, label: 'Option 3' },
            { value: 4, label: 'Option 4', disabled: true },
          ],
        },
      },
    ];
  }

  radioButton() {
    this.form = new FormGroup({});
    this.model = {};
    this.options = {};
    this.fields = [
      {
        key: 'Radio',
        type: 'radio',
        props: {
          label: 'Radio',
          placeholder: 'Placeholder',
          description: 'Description',
          required: true,
          options: [
            { value: 1, label: 'Option 1' },
            { value: 2, label: 'Option 2' },
            { value: 3, label: 'Option 3' },
            { value: 4, label: 'Option 4', disabled: true },
          ],
        },
      },
    ];
  }

  reset() {
    this.model = {};
    this.options = {};
    this.fields = [];
  }

  constructor() {}

  ngOnInit() {}

  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }

  //https://stackblitz.com/edit/angular-rxlpp4-qjiunw
}
