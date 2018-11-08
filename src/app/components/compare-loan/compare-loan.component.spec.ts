import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareLoanComponent } from './compare-loan.component';

describe('CompareLoanComponent', () => {
  let component: CompareLoanComponent;
  let fixture: ComponentFixture<CompareLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
