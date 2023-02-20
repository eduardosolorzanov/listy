import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingElementListComponent } from './shopping-element-list.component';

describe('ShoppingElementListComponent', () => {
  let component: ShoppingElementListComponent;
  let fixture: ComponentFixture<ShoppingElementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingElementListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingElementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
