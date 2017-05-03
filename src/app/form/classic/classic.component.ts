import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms/forms";

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.css']
})
export class ClassicComponent implements OnInit {
  data: any = {
    name: 'Will',
    sid: 'A123456789'
  };
  constructor() { }

  ngOnInit() {
  }

  doSubmit(f: NgForm) {
    console.log(this.data);
  }

  doReset(f: NgForm) {
    f.reset();
  }

}
