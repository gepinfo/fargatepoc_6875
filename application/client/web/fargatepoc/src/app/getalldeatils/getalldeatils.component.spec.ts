import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetalldeatilsComponent } from './getalldeatils.component';

describe('GetalldeatilsComponent', () => {
  let component: GetalldeatilsComponent;
  let fixture: ComponentFixture<GetalldeatilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetalldeatilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetalldeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});