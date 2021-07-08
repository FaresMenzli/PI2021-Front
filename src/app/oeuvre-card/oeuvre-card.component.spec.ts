import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OeuvreCardComponent } from './oeuvre-card.component';

describe('OeuvreCardComponent', () => {
  let component: OeuvreCardComponent;
  let fixture: ComponentFixture<OeuvreCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OeuvreCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OeuvreCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
