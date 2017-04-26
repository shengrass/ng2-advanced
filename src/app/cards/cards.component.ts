import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(private router: Router, public route: ActivatedRoute) { }

  type;
  ngOnInit() {
    // 透過 params 這個 Observable 物件來取得參數值(比較常用)
    this.route.params.subscribe((params) => {
      console.log(params);
      this.type = params['type'];
    });
    //透過snapshot (快照) 取得執行當下的參數值(僅初始值)
    //this.type = this.route.snapshot.params['type'];
  }

  GoFlot() {
    // 傳入字串
    //this.router.navigateByUrl('/charts/flot');
    // 傳入陣列
    this.router.navigate(['charts', 'flot']);
  }

  GoNext(num: number) {
    //+this.type是為了轉型成number
    let nextid = +this.type + num;
    this.router.navigate(['/cards', nextid]);
    //this.router.navigateByUrl('/cards/' + nextid)
  }
}
