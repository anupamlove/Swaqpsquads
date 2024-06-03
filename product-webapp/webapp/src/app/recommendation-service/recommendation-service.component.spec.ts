import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationServiceComponent } from './recommendation-service.component';

describe('RecommendationServiceComponent', () => {
  let component: RecommendationServiceComponent;
  let fixture: ComponentFixture<RecommendationServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendationServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendationServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
