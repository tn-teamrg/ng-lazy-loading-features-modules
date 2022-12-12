import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcePoolsComponent } from './resource-pools.component';

describe('ResourcePoolsComponent', () => {
  let component: ResourcePoolsComponent;
  let fixture: ComponentFixture<ResourcePoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourcePoolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcePoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
