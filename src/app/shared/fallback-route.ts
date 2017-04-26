import { Route } from '@angular/router';


//定義萬用路由:所有path都對應不到時，會切換到首頁
//使用萬用路由時，一定要放在最後一個路由定義中
export const fallbackRoute: Route = {
  path: '**', redirectTo: '/', pathMatch: 'full'
};
