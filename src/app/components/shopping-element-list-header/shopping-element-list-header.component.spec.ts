import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingElementListHeaderComponent } from './shopping-element-list-header.component';

describe('ShoppingElementListHeaderComponent', () => {
  let component: ShoppingElementListHeaderComponent;
  let fixture: ComponentFixture<ShoppingElementListHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingElementListHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingElementListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
