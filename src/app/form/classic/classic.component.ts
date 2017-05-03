import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

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
    console.log(f.value);
  }

  doReset(f: NgForm) {
    f.reset(this.data);
  }

  showLoading(fTest:HTMLButtonElement){
    let old = fTest.value;
    fTest.value="Loading...";
    setTimeout(function(){ fTest.value = old }, 3000);
  }

}
