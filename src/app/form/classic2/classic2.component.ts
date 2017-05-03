import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from "@angular/forms";

@Component({
  selector: 'app-classic2',
  templateUrl: './classic2.component.html',
  styleUrls: ['./classic2.component.css']
})
export class Classic2Component implements OnInit {
  data: any = {
    name: 'Will',
    sid: 'A123456789'
  };
  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      'name': [
        'Will', Validators.required
      ],
      'sid': [
        'A123456789', [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10)
        ]
      ],
      'addresses': this.fb.array([
        this.fb.control('Address 1', Validators.required),
        this.fb.control('Address 2', Validators.required)
      ])
    });
  }

  addAddress() {
    let addresses = this.form.controls.addresses as FormArray;
    addresses.push(this.fb.control('', Validators.required));
  }
  doSubmit() {
    console.log(this.form.value);
  }

  doReset() {
    this.form.reset(this.data);
  }
}
