import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareLoansComponent } from './compare-loans.component';

describe('CompareLoansComponent', () => {
  let component: CompareLoansComponent;
  let fixture: ComponentFixture<CompareLoansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareLoansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
