import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LapSampleComponent } from './lap-sample.component';

describe('LapSampleComponent', () => {
  let component: LapSampleComponent;
  let fixture: ComponentFixture<LapSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LapSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LapSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
