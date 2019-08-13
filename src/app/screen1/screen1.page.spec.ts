import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen1Page } from './screen1.page';

describe('Screen1Page', () => {
  let component: Screen1Page;
  let fixture: ComponentFixture<Screen1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Screen1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Screen1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
