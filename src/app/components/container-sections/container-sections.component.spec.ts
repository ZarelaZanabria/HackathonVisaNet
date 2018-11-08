import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerSectionsComponent } from './container-sections.component';

describe('ContainerSectionsComponent', () => {
  let component: ContainerSectionsComponent;
  let fixture: ComponentFixture<ContainerSectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerSectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
