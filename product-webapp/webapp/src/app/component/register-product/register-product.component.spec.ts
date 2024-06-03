import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { RegisterProductComponent } from './register-product.component';

describe('RegisterProductComponent', () => {
  let component: RegisterProductComponent;
  let fixture: ComponentFixture<RegisterProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterProductComponent],
      imports: [HttpClientModule, FormsModule, ReactiveFormsModule, RouterTestingModule],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a default value for productForm', () => {
    expect(component.productForm).toBeTruthy();
  })

  it('should not show the exchange mode coin', () => {
    expect(component.coin).toBe(false)
  })

  it('should not show the exchange mode preference', () => {
    expect(component.preference).toBe(false)
  })


});
