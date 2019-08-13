import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiScreensPage } from './ui-screens.page';

describe('UiScreensPage', () => {
  let component: UiScreensPage;
  let fixture: ComponentFixture<UiScreensPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiScreensPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiScreensPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
