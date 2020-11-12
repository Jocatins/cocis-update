import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageContractorProfileComponent } from './contractor-profile.component';

describe('PageContractorProfileComponent', () => {
  let component: PageContractorProfileComponent;
  let fixture: ComponentFixture<PageContractorProfileComponent>;

  beforeEach(waitForAsync(() => {
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
