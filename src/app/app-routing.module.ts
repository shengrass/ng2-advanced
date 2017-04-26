import { Page2Component } from './page2/page2.component';
import { Page1Component } from './page1/page1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//路由的做法就是不斷切換Component
const routes: Routes = [
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    //在瀏覽器的 F12 Console 會顯示 Log
    enableTracing: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
