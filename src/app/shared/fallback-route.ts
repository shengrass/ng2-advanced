import { Route } from '@angular/router';

//定義萬用路由:不輸入path時，會預設導入page1
//使用萬用路由時，一定要放在最後一個路由定義中
export const fallbackRoute: Route = {
  path: '**', redirectTo: '/', pathMatch: 'full'
};
