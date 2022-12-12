import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourcePoolsComponent } from './resource-pools.component';

const routes: Routes = [{ path: '', component: ResourcePoolsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcePoolsRoutingModule { }
