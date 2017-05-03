import { Component, OnInit, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {

  @ContentChild('btn')
  btn: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.btn.nativeElement.innerHTML = '100';
  }
}
