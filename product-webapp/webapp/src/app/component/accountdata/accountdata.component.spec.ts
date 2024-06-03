import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountdataComponent } from './accountdata.component';

describe('AccountdataComponent', () => {
  let component: AccountdataComponent;
  let fixture: ComponentFixture<AccountdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
