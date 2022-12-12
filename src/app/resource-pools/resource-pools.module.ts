import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcePoolsRoutingModule } from './resource-pools-routing.module';
import { ResourcePoolsComponent } from './resource-pools.component';


@NgModule({
  declarations: [
    ResourcePoolsComponent
  ],
  imports: [
    CommonModule,
    ResourcePoolsRoutingModule
  ]
})
export class ResourcePoolsModule { }
