import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingElementListsComponent } from './shopping-element-lists.component';

describe('ShoppingElementListsComponent', () => {
  let component: ShoppingElementListsComponent;
  let fixture: ComponentFixture<ShoppingElementListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingElementListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingElementListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
