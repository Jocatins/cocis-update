import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContractorProfileComponent } from './contractor-profile.component';

describe('PageContractorProfileComponent', () => {
  let component: PageContractorProfileComponent;
  let fixture: ComponentFixture<PageContractorProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageContractorProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageContractorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
