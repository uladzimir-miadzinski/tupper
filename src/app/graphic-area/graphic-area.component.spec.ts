import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicAreaComponent } from './graphic-area.component';

describe('GraphicAreaComponent', () => {
  let component: GraphicAreaComponent;
  let fixture: ComponentFixture<GraphicAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
