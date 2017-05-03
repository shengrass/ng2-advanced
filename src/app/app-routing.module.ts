import { EnsureInputGuard } from './ensure-input.guard';
import { LoginGuard } from './login.guard';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { CardsComponent } from './cards/cards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { fallbackRoute } from './shared/fallback-route';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { ClassicComponent } from "app/form/classic/classic.component";
import { Classic2Component } from "app/form/classic2/classic2.component";

//路由的做法就是不斷切換Component
const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      //定義預設路由:不輸入path時，會預設導入page1
      //{ path: '', component: Page1Component },
      //定義轉向路由:不輸入path時，會預設導入dashboard
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'cards/:type', component: CardsComponent },
      //檔案路徑(不含.ts)#模組名稱
      {
        path: 'charts',
        loadChildren: './charts/charts.module#ChartsModule',
        canActivate:[LoginGuard]
      },
      { path: 'form/classic', component: ClassicComponent },
      { path: 'form/classic2', component: Classic2Component }
      //先隱藏，協助 Debug
      //fallbackRoute
    ]
  },
  { path: 'login', component: LoginComponent, canDeactivate: [EnsureInputGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    //IE9(含)以下瀏覽器，就要設定useHash為true，不過網址會多一個#符號
    useHash: false,
    //在瀏覽器的 F12 Console 會顯示 Log
    //enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
