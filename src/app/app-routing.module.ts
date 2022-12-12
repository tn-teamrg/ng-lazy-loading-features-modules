import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// https://angular.io/generated/live-examples/lazy-loading-ngmodules/stackblitz.html
const routes: Routes = [
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'resource-pools', loadChildren: () => import('./resource-pools/resource-pools.module').then(m => m.ResourcePoolsModule) },
  { path: 'reports', loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule) },
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
