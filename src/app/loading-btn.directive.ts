import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[show-loading]'
})
export class LoadingBtnDirective {

  constructor() { }

  //(click)="showLoading($event.target)"
  @HostListener('click', ['$event.target'])
  showLoading(fTest: HTMLButtonElement) {
    let old = fTest.value;
    fTest.value = "Loading...";
    setTimeout(function () { fTest.value = old }, 3000);
  }
}
