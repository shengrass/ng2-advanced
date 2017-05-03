import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //到'./login.component.html'找到第一個NgForm，然後存到form這個變數
  @ViewChild(NgForm)
  form: NgForm
  username: string;
  password: string;
  constructor() { }

  ngOnInit() {
  }

}
