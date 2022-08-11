import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprogressComponent } from './addprogress.component';

describe('AddprogressComponent', () => {
  let component: AddprogressComponent;
  let fixture: ComponentFixture<AddprogressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddprogressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});