import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecollegedataComponent } from './createcollegedata.component';

describe('CreatecollegedataComponent', () => {
  let component: CreatecollegedataComponent;
  let fixture: ComponentFixture<CreatecollegedataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatecollegedataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecollegedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});