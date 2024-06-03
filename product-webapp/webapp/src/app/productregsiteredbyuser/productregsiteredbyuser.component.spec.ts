import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductregsiteredbyuserComponent } from './productregsiteredbyuser.component';

describe('ProductregsiteredbyuserComponent', () => {
  let component: ProductregsiteredbyuserComponent;
  let fixture: ComponentFixture<ProductregsiteredbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductregsiteredbyuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductregsiteredbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
