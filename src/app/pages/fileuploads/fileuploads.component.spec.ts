import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FileuploadsComponent } from './fileuploads.component';

describe('FileuploadsComponent', () => {
  let component: FileuploadsComponent;
  let fixture: ComponentFixture<FileuploadsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FileuploadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileuploadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
