import { FlotComponent } from './charts/flot/flot.component';
import { CardsComponent } from './cards/cards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { fallbackRoute } from './shared/fallback-route';
import { Page2Component } from './page2/page2.component';
import { Page1Component } from './page1/page1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

//路由的做法就是不斷切換Component
const routes: Routes = [
  //定義預設路由:不輸入path時，會預設導入page1
  //{ path: '', component: Page1Component },
  //定義轉向路由:不輸入path時，會預設導入dashboard
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cards/:type', component: CardsComponent },
  {
    path: 'charts',
    children: [
      { path: '', redirectTo: 'flot', pathMatch: 'full' },
      { path: 'flot', component: FlotComponent }
    ]
  }
  //先隱藏，協助 Debug
  //fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    //IE9(含)以下瀏覽器，就要設定useHash為true，不過網址會多一個#符號
    useHash: false,
    //在瀏覽器的 F12 Console 會顯示 Log
    enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
